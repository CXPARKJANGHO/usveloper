"use strict";
var KeyWord = /** @class */ (function () {
    function KeyWord() {
        this.MSG = 'Hello';
    }
    KeyWord.prototype.log = function () {
        this.MSG = 'Hi'; //* readOnly
        console.log("MSG: " + this.MSG);
    };
    return KeyWord;
}());
new KeyWord().log();
//# sourceMappingURL=KeyWord.js.map