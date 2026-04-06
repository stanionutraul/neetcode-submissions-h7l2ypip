class Solution {
    
    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";

        for (let str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        let result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            
            while (s[j] !== "#") {
                j++;
            }
            
            let length = parseInt(s.substring(i, j));
          
            i = j + 1;

            let str = s.substring(i, i + length);
            result.push(str);

           
            i += length;
        }

        return result;
    }
}