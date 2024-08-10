/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let y=s.split("")
    for(let i=0;i<y.length;i++){
        if(y.join("")===goal){
            return true
        }
        let x=y.shift()
        y.push(x)
    }
    return false
};