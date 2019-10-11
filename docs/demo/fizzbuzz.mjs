/**
 * 汎用的な部分の実装。数列生成の{@link range}と、値の置換をする{@link replace}など。
 */


/**
 * 等差数列を生成する。
 *
 * @param {int} from     - 数列を開始する値。
 * @param {int} to       - 数列を終了する値。
 * @param {int} [step=1] - それぞれの数の間の差。
 *
 * @throws  {Error} - stepの値が無効な場合は例外を送出する。
 * @returns {int[]} - 生成された数列。
 */
export function range(from, to, step = 1) {
    const result = [from];
    const num = (parseInt(to) - parseInt(from)) / parseInt(step);

    if (num < 0) {
        throw new Error('invalid step');
    }

    for (let i=1; i<=num; i++) {
        result.push(parseInt(from) + i * parseInt(step));
    }

    return result;
}


/**
 * 置換を行なうかどうかや、何に置換するかを決定する関数。
 *
 * @typedef {function} ReplaceRule
 *
 * @param {any} value - 置換するかどうかを決めたい値。
 *
 * @returns {[boolean, any]} - 置換を行なうかどうかのフラグと、置換後の値。
 */


/**
 * 配列の各要素を確認し、条件に当て嵌まるのなら置換を行なう。
 *
 * @param {any[]}         items - 置換を行ないたい配列。
 * @param {ReplaceRule[]} rules - 置換の方法を決める{@link ReplaceRule}の配列。最初に当て嵌まったルールだけが適用される。
 *
 * @returns {any[]} - 必要に応じて要素が置換された配列。
 */
export function replace(items, rules) {
    return items.map(x => {
        for (let f of rules) {
            const [flag, replace] = f(x);
            if (flag) {
                return replace;
            }
        }
        return x;
    });
}


/**
 * 特定の数値の倍数が来た場合に、別の値に置換する{@link ReplaceRule}を生成する。
 *
 * @param {int} num     - 何の倍数で置換を行なうか
 * @param {any} replace - 置換後の値。
 *
 * @returns {ReplaceRule} - {@link replace}に渡すためのルール関数。
 */
export function modRule(num, replace) {
    return x => [x%num == 0, replace];
}
