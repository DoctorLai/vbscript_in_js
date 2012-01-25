/* Jison generated parser */
var vbs4 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"statement_list":4,"EOF":5,"statement_line":6,"statement":7,"NEWLINE":8,"IDENTIFIER":9,"function":10,"if_statement":11,"if_else_statement":12,"assignment":13,"call_statement":14,"FUNCTION":15,"arguments":16,"END":17,"IF":18,"conditional":19,"THEN":20,"ELSE":21,"compare":22,">":23,"<":24,">=":25,"<=":26,"=":27,"CALL":28,"EMPTYBRACKETS":29,"(":30,"argument_list":31,")":32,"argument":33,",":34,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"NEWLINE",9:"IDENTIFIER",15:"FUNCTION",17:"END",18:"IF",20:"THEN",21:"ELSE",23:">",24:"<",25:">=",26:"<=",27:"=",28:"CALL",29:"EMPTYBRACKETS",30:"(",32:")",34:","},
productions_: [0,[3,2],[4,1],[4,2],[6,2],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,7],[11,7],[12,10],[19,3],[22,1],[22,1],[22,1],[22,1],[22,1],[14,3],[13,3],[16,1],[16,3],[31,0],[31,1],[31,3],[33,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return { type:'Program', body: $$[$0-1] }; 
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: 
      if ($$[$0-1]['push']) {
        $$[$0-1].push($$[$0]);
        this.$ = $$[$0-1];
      } else {
        console.log("So... statement_list isn't cool... let's see what it is");
        console.log($$[$0-1]);
        //console.log($$[$0]);
        var tmp = [$$[$0-1]];
        tmp.push($$[$0]);
        this.$ = tmp;
      }
    //this.$ = $$[$0-1].concat($$[$01]); 
    
break;
case 11: this.$ = { type: 'Function', name: $$[$0-5], arguments: $$[$0-4], body: $$[$0-2] }; 
break;
case 12: this.$ = { type: 'If', condition: $$[$0-5], body: $$[$0-2]}; 
break;
case 13: this.$ = { type: 'IfElse', condition: $$[$0-8], body: $$[$0-5], else_body: $$[$0-2]}; 
break;
case 14: this.$ = { type: 'Conditional', first: $$[$0-2], second: $$[$0], compare: $$[$0-1]}; 
break;
case 20: this.$ = { type: 'Call', name: $$[$0-1], arguments: $$[$0] }; 
break;
case 21: this.$ = { type: 'Assignment', name: $$[$0-2], value: $$[$0]}; 
break;
case 23: this.$ = $$[$0-1]; 
break;
case 24: this.$ = []; 
break;
case 25: this.$ = [$$[$0]]; 
break;
case 26: this.$ = $$[$0-2].concat($$[$0]); 
break;
case 27: this.$ = {type: 'Argument', value: $$[$0] }; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13]},{1:[3]},{5:[1,14],6:15,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13]},{5:[2,2],9:[2,2],15:[2,2],17:[2,2],18:[2,2],21:[2,2],28:[2,2]},{8:[1,16]},{8:[2,5],27:[1,17],32:[2,5],34:[2,5]},{8:[2,6],32:[2,6],34:[2,6]},{8:[2,7],32:[2,7],34:[2,7]},{8:[2,8],32:[2,8],34:[2,8]},{8:[2,9],32:[2,9],34:[2,9]},{8:[2,10],32:[2,10],34:[2,10]},{9:[1,18]},{9:[1,20],19:19},{9:[1,21]},{1:[2,1]},{5:[2,3],9:[2,3],15:[2,3],17:[2,3],18:[2,3],21:[2,3],28:[2,3]},{5:[2,4],9:[2,4],15:[2,4],17:[2,4],18:[2,4],21:[2,4],28:[2,4]},{9:[1,22]},{16:23,29:[1,24],30:[1,25]},{20:[1,26]},{22:27,23:[1,28],24:[1,29],25:[1,30],26:[1,31],27:[1,32]},{16:33,29:[1,24],30:[1,25]},{8:[2,21],32:[2,21],34:[2,21]},{8:[1,34]},{8:[2,22],32:[2,22],34:[2,22]},{7:37,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13],31:35,32:[2,24],33:36,34:[2,24]},{8:[1,38]},{9:[1,39]},{9:[2,15]},{9:[2,16]},{9:[2,17]},{9:[2,18]},{9:[2,19]},{8:[2,20],32:[2,20],34:[2,20]},{4:40,6:3,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13]},{32:[1,41],34:[1,42]},{32:[2,25],34:[2,25]},{32:[2,27],34:[2,27]},{4:43,6:3,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13]},{20:[2,14]},{6:15,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],17:[1,44],18:[1,12],28:[1,13]},{8:[2,23],32:[2,23],34:[2,23]},{7:37,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13],33:45},{6:15,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],17:[1,46],18:[1,12],21:[1,47],28:[1,13]},{15:[1,48]},{32:[2,26],34:[2,26]},{18:[1,49]},{8:[1,50]},{8:[2,11],32:[2,11],34:[2,11]},{8:[2,12],32:[2,12],34:[2,12]},{4:51,6:3,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],18:[1,12],28:[1,13]},{6:15,7:4,9:[1,5],10:6,11:7,12:8,13:9,14:10,15:[1,11],17:[1,52],18:[1,12],28:[1,13]},{18:[1,53]},{8:[2,13],32:[2,13],34:[2,13]}],
defaultActions: {14:[2,1],28:[2,15],29:[2,16],30:[2,17],31:[2,18],32:[2,19],39:[2,14]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: return 8; 
break;
case 1: /* skip whitespace */ 
break;
case 2: return 28; 
break;
case 3: return 28; 
break;
case 4: return 15; 
break;
case 5: return 18; 
break;
case 6: return 20; 
break;
case 7: return 21; 
break;
case 8: return 17; 
break;
case 9: return yy_.yytext; 
break;
case 10: return 29; 
break;
case 11: return yy_.yytext; 
break;
case 12: return 9; 
break;
case 13: return 5; 
break;
}
};
lexer.rules = [/^\n+/,/^[ \t]+/,/^Call\b/,/^call\b/,/^Function\b/,/^If\b/,/^Then\b/,/^Else\b/,/^End\b/,/^MOD\b/,/^\(\)/,/^[<>\(\)=,]/,/^\w+/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = vbs4;
exports.parse = function () { return vbs4.parse.apply(vbs4, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}