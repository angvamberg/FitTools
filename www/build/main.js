webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronometroInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CronometroInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronometroInicioPage = /** @class */ (function () {
    function CronometroInicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        CronometroInicioPage_1.sprint = this.navParams.get('sprint');
        this.dateSprint = this.navParams.get('dateSprint');
        this.choiceSprint = this.navParams.get('choiceSprint');
        this.exercicio = this.navParams.get('exercicio');
    }
    CronometroInicioPage_1 = CronometroInicioPage;
    CronometroInicioPage.prototype.start = function () {
        console.log(CronometroInicioPage_1.sprint);
        CronometroInicioPage_1.isenabled = false;
        CronometroInicioPage_1.intervalo = setInterval(function () {
            CronometroInicioPage_1.segundos += 1;
            if (CronometroInicioPage_1.segundos === 60) {
                CronometroInicioPage_1.minutos++;
                CronometroInicioPage_1.segundos = 0;
            }
            if (CronometroInicioPage_1.sprint == CronometroInicioPage_1.minutos) {
                CronometroInicioPage_1.clean();
            }
            if (CronometroInicioPage_1.minutos < 10) {
                if (CronometroInicioPage_1.segundos < 10) {
                    CronometroInicioPage_1.setTempo('0' + CronometroInicioPage_1.minutos + ':' + '0' + CronometroInicioPage_1.segundos);
                }
                else {
                    CronometroInicioPage_1.setTempo('0' + CronometroInicioPage_1.minutos + ':' + CronometroInicioPage_1.segundos);
                }
            }
            else {
                if (CronometroInicioPage_1.segundos < 10) {
                    CronometroInicioPage_1.setTempo(CronometroInicioPage_1.minutos + ':' + '0' + CronometroInicioPage_1.segundos);
                }
                else {
                    CronometroInicioPage_1.setTempo(CronometroInicioPage_1.minutos + ':' + CronometroInicioPage_1.segundos);
                }
            }
            console.log(CronometroInicioPage_1.tempo);
        }, 1000);
    };
    CronometroInicioPage.prototype.pause = function () {
        switch (CronometroInicioPage_1.acao) {
            case 'Pausar':
                console.log('pausando');
                clearInterval(CronometroInicioPage_1.intervalo);
                CronometroInicioPage_1.acao = 'Continuar';
                break;
            case 'Continuar':
                console.log('continuando');
                CronometroInicioPage_1.acao = 'Pausar';
                this.start();
                break;
        }
    };
    CronometroInicioPage.clean = function () {
        clearInterval(this.intervalo);
        this.limpaCampos();
        CronometroInicioPage_1.tempo = '00:00';
        this.isenabled = true;
        CronometroInicioPage_1.acao = 'Pausar';
    };
    CronometroInicioPage.prototype.stopAndClean = function () {
        CronometroInicioPage_1.clean();
    };
    CronometroInicioPage.setTempo = function (x) {
        CronometroInicioPage_1.tempo = x;
    };
    Object.defineProperty(CronometroInicioPage.prototype, "tempo", {
        get: function () {
            return CronometroInicioPage_1.tempo;
        },
        enumerable: true,
        configurable: true
    });
    CronometroInicioPage.limpaCampos = function () {
        CronometroInicioPage_1.minutos = 0;
        CronometroInicioPage_1.segundos = 0;
    };
    Object.defineProperty(CronometroInicioPage.prototype, "isenabled", {
        get: function () {
            return CronometroInicioPage_1.isenabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CronometroInicioPage.prototype, "acao", {
        get: function () {
            return CronometroInicioPage_1.acao;
        },
        enumerable: true,
        configurable: true
    });
    CronometroInicioPage.prototype.ionViewDidLeave = function () {
        CronometroInicioPage_1.clean();
    };
    CronometroInicioPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    CronometroInicioPage.tempo = '00:00';
    CronometroInicioPage.acao = 'Pausar';
    CronometroInicioPage.segundos = 0;
    CronometroInicioPage.minutos = 0;
    CronometroInicioPage.isenabled = true;
    CronometroInicioPage = CronometroInicioPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cronometro-inicio',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\cronometro-inicio\cronometro-inicio.html"*/'<!--\n\n  Generated template for the CronometroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n\n\n  <p style="text-align: center;font-size: 67px">{{ tempo }}</p>\n\n  <br><br><br><br>\n\n  <button ion-button block outline (click)="start()" [disabled]="!isenabled" style="color:black;border-color: black">Começar</button>\n\n  <button ion-button block outline (click)="pause()" [disabled]="isenabled" style="color:black;border-color:black">{{acao}}</button>\n\n  <button ion-button block outline (click)="stopAndClean()" style="color:black;border-color: black">Parar e Zerar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\cronometro-inicio\cronometro-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CronometroInicioPage);
    return CronometroInicioPage;
    var CronometroInicioPage_1;
}());

//# sourceMappingURL=cronometro-inicio.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoPage = /** @class */ (function () {
    function ResultadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadoPage');
    };
    ResultadoPage.prototype.abreHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
    };
    ResultadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-resultado',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\resultado\resultado.html"*/'<!--\n\n  Generated template for the ResultadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n\n\n    <h1>Você concluiu seu treino!</h1>\n\n\n\n  <ion-label >Deseja Salvar ?</ion-label>\n\n <button ion-button block  outline style="color:black;border-color: black;height: 3em;" (click)="abreHome()">Sim</button>\n\n <button ion-button block  outline color="danger" style="height: 3em;color:black;border-color: black" (click)="abreHome()">Não</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\resultado\resultado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ResultadoPage);
    return ResultadoPage;
}());

//# sourceMappingURL=resultado.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\sobre\sobre.html"*/'<!--\n\n  Generated template for the SobrePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n\n\n    <h2 style="text-align: center"> Nossa Equipe</h2>\n\n  O FitApp foi desenvolvido por uma equipe de estudantes voltado para quem quer fazer exercícios funcionais em casa.\n\n   O aplicativo conta com uma série recursos e dicas para facilitar e ajudar aqueles que querem seguir ou montar o seu próprio treinamento.\n\n   O FitApp conta contem  um cronômetro, dicas de exercício, cálculo IMC(índice de massa corporal) e um GPS para aqueles que correm ou caminham pode traçar e acompanhar seu seu percurso.\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cronometro-inicio/cronometro-inicio.module": [
		289,
		3
	],
	"../pages/cronometro/cronometro.module": [
		290,
		2
	],
	"../pages/exercicios/exercicios.module": [
		164
	],
	"../pages/imc/imc.module": [
		165
	],
	"../pages/login/login.module": [
		168
	],
	"../pages/menu/menu.module": [
		169
	],
	"../pages/resultado/resultado.module": [
		291,
		1
	],
	"../pages/rota/rota.module": [
		170
	],
	"../pages/sobre/sobre.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImcPage = /** @class */ (function () {
    function ImcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImcPage.prototype.calculoImc = function () {
        if (this.peso > 0 && this.altura > 0) {
            var finalImc = this.peso / (this.altura * this.altura);
            this.imcValor = parseFloat(finalImc.toFixed(2));
            this.setIMCMenssagem();
        }
    };
    ImcPage.prototype.setIMCMenssagem = function () {
        if (this.imcValor < 18.5) {
            this.imcMenssagem = "abaixo do peso";
        }
        else {
            if (this.imcValor > 18.5 && this.imcValor < 25) {
                this.imcMenssagem = "Normal";
            }
            else {
                if (this.imcValor > 25 && this.imcValor < 30) {
                    this.imcMenssagem = "Acima do peso";
                }
                else {
                    if (this.imcValor > 30) {
                        this.imcMenssagem = "Obeso";
                    }
                }
            }
        }
    };
    ImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImcPage');
    };
    ImcPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    ImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-imc',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\imc\imc.html"*/'<!--\n\n  Generated template for the ImcPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>peso (kg)</ion-label>\n\n      <ion-input type="number" [(ngModel)]="peso" [brmasker]="{mask:\'00.00\'}"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>altura (cm)</ion-label>\n\n      <ion-input type="number" [(ngModel)]="altura" [brmasker]="{mask:\'0.000\'}"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button  ion-button block  outline style="color:black;border-color: black" (click)="calculoImc()">Calcular</button>\n\n\n\n  </div>\n\n\n\n  <ion-card *ngIf="imcValor">\n\n    <ion-card-header>\n\n      Calculo de IMC\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Seu: peso {{this.peso}} kg, altura {{this.altura}} cm</p>\n\n      <p>IMC: {{imcValor}}</p>\n\n      <p><strong>Você está {{imcMenssagem}}</strong></p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\imc\imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ImcPage);
    return ImcPage;
}());

//# sourceMappingURL=imc.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cronometro_cronometro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ExerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExerciciosPage = /** @class */ (function () {
    function ExerciciosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lista = [
            { titulo: "abdominal", imagem: "assets/imgs/abdominal.png" },
            { titulo: "corrida", imagem: "assets/imgs/correr.png" },
            { titulo: "agachamento", imagem: "assets/imgs/agachamento.png" },
            { titulo: "flexao", imagem: "assets/imgs/flexao.png" },
            { titulo: "pular", imagem: "assets/imgs/pular.png" },
            { titulo: "barra", imagem: "assets/imgs/barra.png" },
            { titulo: "bambole", imagem: "assets/imgs/bambole.png" },
            { titulo: "natacao", imagem: "assets/imgs/natacao.png" },
            { titulo: "box", imagem: "assets/imgs/Box.png" },
            { titulo: "afundo", imagem: "assets/imgs/afundo.png" }
        ];
    }
    ExerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciciosPage');
    };
    ExerciciosPage.prototype.teste = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciciosPage.prototype.comecarTreino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExerciciosPage.prototype.abreTreino = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cronometro_cronometro__["a" /* CronometroPage */], { exercicio: item });
    };
    ExerciciosPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    ExerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-exercicios',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\exercicios\exercicios.html"*/'<!--\n\n  Generated template for the ExerciciosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n    <h5>Selecione os Exercício Abaixo:</h5>\n\n  <ion-card>\n\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n    <img src="assets/imgs/abdominal.png" (click)="abreTreino(item)" id="abdominal"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Abdominal\n\n      </ion-card-title>\n\n      <p>\n\n          É um exercício que vai fortalecer e dar mais resistência para a musculatura do abdomem.\n\n          O abdômen se localiza no tronco, na região da barriga e é composto por orgãos internos como estômago,\n\n          intestino, dentre outros e por um grupo muscular formado por quatro músculos principais: reto, oblíquo interno, oblíquo externo e  transverso.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n      <img src="assets/imgs/correr.png"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Corrida\n\n        </ion-card-title>\n\n        <p>\n\n            Correr traz muitos benefícios para a qualidade de vida do indivíduo: reduz o peso corporal, melhora o nível de colesterol, aumenta a capacidade cardiorrespiratória,\n\n             reduz os riscos de infarto, aumenta a massa muscular, reduz a variação da pressão arterial de repouso.\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n      <img src="assets/imgs/agachamento.png"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Agachamento\n\n        </ion-card-title>\n\n        <p>\n\n            O agachamento, também conhecido por squat, é um exercício muito completo, pois, além de exercitar o bumbum, trabalha a barriga, as coxas e as costas,\n\n             ajudando a emagrecer, perder gordura e celulite e a endurecer os músculos, obtendo-se resultados em homens e mulheres.\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n        <img src="assets/imgs/flexao.png"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n              Flexão de braço\n\n          </ion-card-title>\n\n          <p>\n\n              Se você quer exercitar vários músculos ao mesmo tempo, então a flexão de braços é uma das melhores opções. Essa atividade envolve a flexão horizontal da articulação do ombro e a extensão do cotovelo.\n\n              Possibilitar esse movimento exige a participação de muitos músculos: peitoral maior, deltoide anterior e tríceps.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n          <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n          <img src="assets/imgs/pular.png"/>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n               Pular Corda\n\n            </ion-card-title>\n\n            <p>\n\n                Pular corda é uma ótima opção de exercício aeróbico. Em 15 minutos de atividade você perde 180 calorias.\n\n                Este mesmo período equivale a 1 hora de caminhada. A corda fortalece os ossos e os membros inferiores (coxa, panturrilha).\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n            <img src="assets/imgs/barra.png"/>\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                 Barra Fixa\n\n              </ion-card-title>\n\n              <p>\n\n                   Além de trabalhar as costas (principalmente asa) e bíceps,\n\n                   no movimento tradicional, você pode fortalecer seu abdômen fazendo isometria (travar o movimento em cima, concentrando forças no abdômen).\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-card>\n\n              <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n              <img src="assets/imgs/bambole.png"/>\n\n              <ion-card-content>\n\n                <ion-card-title>\n\n                   Bambolê\n\n                </ion-card-title>\n\n                <p>\n\n                    O bambolê hoje em dia é feito com aros muito mais pesados do que antes,\n\n                     e oferece um ótimo exercício aeróbico. Você pode perder 400 calorias facilmente em uma hora com o bambolê (o número real depende do peso do aro).\n\n                </p>\n\n              </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n                <img src="assets/imgs/natacao.png"/>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                     Natação\n\n                  </ion-card-title>\n\n                  <p>\n\n                      A natação é considerada um dos esportes mais completos que existem. Isso porque, ao nadar, você trabalha diversos grupos musculares ao mesmo tempo\n\n                      . Não à toa, é uma das modalidades esportivas mais indicadas tanto para quem quer ganhar massa muscular quanto para quem busca definição e perda calórica.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n              <ion-card>\n\n                  <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n                  <img src="assets/imgs/Box.png"/>\n\n                  <ion-card-content>\n\n                    <ion-card-title>\n\n                        Box jumps\n\n                    </ion-card-title>\n\n                    <p>\n\n                        O box jump é um exercício de alta intensidade e esforço, então é claro que vai contribuir (e muito) para queimar calorias.\n\n                        Para quem quer emagrecer ele pode fazer parte da rotina já que ajuda no processo de desenvolvimento muscular e ainda expulsa as gordurinhas extras do corpo.\n\n                    </p>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n                <ion-card>\n\n                    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n                    <img src="assets/imgs/afundo.png"/>\n\n                    <ion-card-content>\n\n                      <ion-card-title>\n\n                          Afundo\n\n                      </ion-card-title>\n\n                      <p>\n\n                          Um ótimo exercício que envolve o peso corporal para treinar as pernas, mas que é diferente do agachamento, já que é mais focado nos glúteos e isquiotibiais.\n\n                 Existem diversas variações deste exercício disponível, como por exemplo realizá-lo apenas com uma perna para assim se focar mais na mesma. Outra variação,\n\n                  que atinge mais os glúteos, é o afundo de lado.\n\n                  </p>\n\n                    </ion-card-content>\n\n                  </ion-card>\n\n\n\n                  <button ion-button block outline style="color:black;border-color: black"(click)="comecarTreino()">Começar Treino</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\exercicios\exercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ExerciciosPage);
    return ExerciciosPage;
}());

//# sourceMappingURL=exercicios.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RotaPage = /** @class */ (function () {
    function RotaPage(navCtrl, navParams, geolocation, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.options = {
            useLocale: true,
            maxResults: 5
        };
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.ionViewDidLoad();
    }
    RotaPage.prototype.ionViewDidLoad = function () {
        this.initializeMap();
    };
    RotaPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    RotaPage.prototype.initializeMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.startPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                zoom: 18,
                center: _this.startPosition,
                disableDefaultUI: true
            };
            _this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            _this.directionsDisplay.setMap(_this.map);
            var marker = new google.maps.Marker({
                position: _this.startPosition,
                map: _this.map,
            });
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, _this.options)
                .then(function (result) { return _this.originPosition = JSON.stringify(result[1]).split(",")[5].split(":")[1].replace(/[\"}]/g, ""); })
                .catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    RotaPage.prototype.calculateRoute = function () {
        if (this.destinationPosition && this.originPosition) {
            var request = {
                // Pode ser uma coordenada (LatLng), uma string ou um lugar
                origin: this.originPosition,
                destination: this.destinationPosition,
                travelMode: 'DRIVING'
            };
            this.traceRoute(this.directionsService, this.directionsDisplay, request);
        }
    };
    RotaPage.prototype.traceRoute = function (service, display, request) {
        service.route(request, function (result, status) {
            if (status == 'OK') {
                display.setDirections(result);
            }
        });
    };
    RotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rota',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\rota\rota.html"*/'<!--\n\n  Generated template for the RotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n    <ion-item>\n\n        <ion-label stacked>De onde?</ion-label>\n\n        <ion-input type="text"[(ngModel)]="originPosition"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Para onde?</ion-label>\n\n        <ion-input type="text" [(ngModel)]="destinationPosition"></ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button block  outline  style="color:black;border-color: black" (click)="calculateRoute()">Traçar rota!</button>\n\n    <br><br>\n\n\n\n    <div #map id="map"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\rota\rota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], RotaPage);
    return RotaPage;
}());

//# sourceMappingURL=rota.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciciosPageModule", function() { return ExerciciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercicios__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExerciciosPageModule = /** @class */ (function () {
    function ExerciciosPageModule() {
    }
    ExerciciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exercicios__["a" /* ExerciciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exercicios__["a" /* ExerciciosPage */]),
            ],
        })
    ], ExerciciosPageModule);
    return ExerciciosPageModule;
}());

//# sourceMappingURL=exercicios.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcPageModule", function() { return ImcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imc__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImcPageModule = /** @class */ (function () {
    function ImcPageModule() {
    }
    ImcPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imc__["a" /* ImcPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imc__["a" /* ImcPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
        })
    ], ImcPageModule);
    return ImcPageModule;
}());

//# sourceMappingURL=imc.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotaPageModule", function() { return RotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rota__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RotaPageModule = /** @class */ (function () {
    function RotaPageModule() {
    }
    RotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rota__["a" /* RotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rota__["a" /* RotaPage */]),
            ],
        })
    ], RotaPageModule);
    return RotaPageModule;
}());

//# sourceMappingURL=rota.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu_menu_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_exercicios_exercicios_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cronometro_cronometro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rota_rota_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_imc_imc_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_resultado_resultado__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cronometro_cronometro__["a" /* CronometroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_resultado_resultado__["a" /* ResultadoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cronometro-inicio/cronometro-inicio.module#CronometroInicioPageModule', name: 'CronometroInicioPage', segment: 'cronometro-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cronometro/cronometro.module#CronometroPageModule', name: 'CronometroPage', segment: 'cronometro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercicios/exercicios.module#ExerciciosPageModule', name: 'ExerciciosPage', segment: 'exercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imc/imc.module#ImcPageModule', name: 'ImcPage', segment: 'imc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultado/resultado.module#ResultadoPageModule', name: 'ResultadoPage', segment: 'resultado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rota/rota.module#RotaPageModule', name: 'RotaPage', segment: 'rota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__pages_rota_rota_module__["RotaPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_imc_imc_module__["ImcPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_exercicios_exercicios_module__["ExerciciosPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__["LoginPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cronometro_cronometro__["a" /* CronometroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_resultado_resultado__["a" /* ResultadoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.setRootPage = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.openHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\app\app.html"*/'<ion-menu side="left" id="myMenu" [content]="content">\n\n\n\n  <ion-toolbar>\n\n    <ion-title>Menu</ion-title>\n\n\n\n  </ion-toolbar>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item>\n\n        blank\n\n      </button>\n\n      <button ion-item (click)="openPage(\'MenuPage\')" class="itemMenu">\n\n        <ion-icon name="home" class="iconMenu"></ion-icon>\n\n        Menu\n\n      </button>\n\n      <button ion-item (click)="openHome()" class="itemMenu">\n\n        <ion-icon name="home" class="iconMenu"></ion-icon>\n\n        Exercitar\n\n      </button>\n\n      <button ion-item (click)="openPage(\'ExerciciosPage\')" class="itemMenu">\n\n        <ion-icon name="bicycle" class="iconMenu"></ion-icon>\n\n        Tipos de Exercícios\n\n      </button>\n\n      <button ion-item (click)="setRootPage(\'RotaPage\')" class="itemMenu">\n\n          <ion-icon name="walk" class="iconMenu"></ion-icon>\n\n          Traçar Rota\n\n      </button>\n\n      <button ion-item (click)="openPage(\'ImcPage\')" class="itemMenu">\n\n          <ion-icon name="stats" class="iconMenu"></ion-icon>\n\n          Calcular IMC\n\n      </button>\n\n      <button ion-item (click)="openPage(\'SobrePage\')" class="itemMenu">\n\n          <ion-icon name="cafe" class="iconMenu"></ion-icon>\n\n          Sobre nós\n\n      </button>\n\n      <button ion-item (click)="setRootPage(\'LoginPage\')" class="itemMenu">\n\n          <ion-icon name="power" class="iconMenu"></ion-icon>\n\n          Deslogar\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imc_imc__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rota_rota__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cronometro_inicio_cronometro_inicio__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.rota = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__rota_rota__["a" /* RotaPage */]);
    };
    MenuPage.prototype.exercicios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exercicios_exercicios__["a" /* ExerciciosPage */]);
    };
    MenuPage.prototype.imc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__imc_imc__["a" /* ImcPage */]);
    };
    MenuPage.prototype.sobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__sobre_sobre__["a" /* SobrePage */]);
    };
    MenuPage.prototype.sair = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.cronometro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__cronometro_inicio_cronometro_inicio__["a" /* CronometroInicioPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class="page-menu">\n\n\n\n      <ion-card>\n\n        <img src="assets/imgs/cronometro2.png" (click)="cronometro()" />\n\n        <div class="card-title">Cronometro</div>\n\n      </ion-card>\n\n      <ion-card>\n\n        <img src="assets/imgs/mapa2.png" (click)="rota()" />\n\n        <div class="card-title">Rota</div>\n\n      </ion-card>\n\n\n\n\n\n\n\n      <ion-card>\n\n        <img src="assets/imgs/imc2.png" (click)="imc()" />\n\n        <div class="card-title">Imc</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <img src="assets/imgs/correr2.png" (click)="exercicios()" />\n\n        <div class="card-title">Exercicios</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <img src="assets/imgs/quem2.png" (click)="sobre()" />\n\n        <div class="card-title">Quem somos</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <img src="assets/imgs/sair2.png" (click)="sair()" />\n\n        <div class="card-title">Sair</div>\n\n      </ion-card>\n\n\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronometroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resultado_resultado__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CronometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CronometroPage = /** @class */ (function () {
    function CronometroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        CronometroPage_1.sprint = this.navParams.get('sprint');
        this.dateSprint = this.navParams.get('dateSprint');
        this.choiceSprint = this.navParams.get('choiceSprint');
        this.exercicio = this.navParams.get('exercicio');
    }
    CronometroPage_1 = CronometroPage;
    CronometroPage.prototype.start = function () {
        console.log(CronometroPage_1.sprint);
        CronometroPage_1.isenabled = false;
        CronometroPage_1.intervalo = setInterval(function () {
            CronometroPage_1.segundos += 1;
            if (CronometroPage_1.segundos === 60) {
                CronometroPage_1.minutos++;
                CronometroPage_1.segundos = 0;
            }
            if (CronometroPage_1.sprint == CronometroPage_1.minutos) {
                CronometroPage_1.clean();
            }
            if (CronometroPage_1.minutos < 10) {
                if (CronometroPage_1.segundos < 10) {
                    CronometroPage_1.setTempo('0' + CronometroPage_1.minutos + ':' + '0' + CronometroPage_1.segundos);
                }
                else {
                    CronometroPage_1.setTempo('0' + CronometroPage_1.minutos + ':' + CronometroPage_1.segundos);
                }
            }
            else {
                if (CronometroPage_1.segundos < 10) {
                    CronometroPage_1.setTempo(CronometroPage_1.minutos + ':' + '0' + CronometroPage_1.segundos);
                }
                else {
                    CronometroPage_1.setTempo(CronometroPage_1.minutos + ':' + CronometroPage_1.segundos);
                }
            }
            console.log(CronometroPage_1.tempo);
        }, 1000);
    };
    CronometroPage.prototype.pause = function () {
        switch (CronometroPage_1.acao) {
            case 'Pausar':
                console.log('pausando');
                clearInterval(CronometroPage_1.intervalo);
                CronometroPage_1.acao = 'Continuar';
                break;
            case 'Continuar':
                console.log('continuando');
                CronometroPage_1.acao = 'Pausar';
                this.start();
                break;
        }
    };
    CronometroPage.clean = function () {
        clearInterval(this.intervalo);
        this.limpaCampos();
        CronometroPage_1.tempo = '00:00';
        this.isenabled = true;
        CronometroPage_1.acao = 'Pausar';
    };
    CronometroPage.prototype.stopAndClean = function () {
        CronometroPage_1.clean();
    };
    CronometroPage.setTempo = function (x) {
        CronometroPage_1.tempo = x;
    };
    Object.defineProperty(CronometroPage.prototype, "tempo", {
        get: function () {
            return CronometroPage_1.tempo;
        },
        enumerable: true,
        configurable: true
    });
    CronometroPage.limpaCampos = function () {
        CronometroPage_1.minutos = 0;
        CronometroPage_1.segundos = 0;
    };
    Object.defineProperty(CronometroPage.prototype, "isenabled", {
        get: function () {
            return CronometroPage_1.isenabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CronometroPage.prototype, "acao", {
        get: function () {
            return CronometroPage_1.acao;
        },
        enumerable: true,
        configurable: true
    });
    CronometroPage.prototype.ionViewDidLeave = function () {
        CronometroPage_1.clean();
    };
    CronometroPage.prototype.abreResultado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__resultado_resultado__["a" /* ResultadoPage */]);
    };
    CronometroPage.prototype.voltar = function () {
        this.navCtrl.push("MenuPage");
    };
    CronometroPage.tempo = '00:00';
    CronometroPage.acao = 'Pausar';
    CronometroPage.segundos = 0;
    CronometroPage.minutos = 0;
    CronometroPage.isenabled = true;
    CronometroPage = CronometroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cronometro',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\cronometro\cronometro.html"*/'<!--\n\n  Generated template for the CronometroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n\n\n  <p style="text-align: center;font-size: 67px">{{ tempo }}</p>\n\n  <br><br><br><br>\n\n  <button ion-button block outline (click)="start()" [disabled]="!isenabled" style="color:black;border-color: black">Começar</button>\n\n  <button ion-button block outline (click)="pause()" [disabled]="isenabled" style="color:black;border-color:black">{{acao}}</button>\n\n  <button ion-button block outline (click)="stopAndClean()" style="color:black;border-color: black">Parar e Zerar</button>\n\n  <button ion-button block outline (click)="abreResultado()" style="color:black;border-color: black">Salvar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\cronometro\cronometro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CronometroPage);
    return CronometroPage;
    var CronometroPage_1;
}());

//# sourceMappingURL=cronometro.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cronometro_cronometro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.sprintForm = formBuilder.group({
            sprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dateSprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            choiceSprint: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)]
        });
    }
    HomePage.prototype.burn = function () {
        if (this.sprintForm.valid) {
            var toast = this.toastCtrl.create({
                message: "Hora de se exercitar! ;)",
                duration: 2000
            });
            toast.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cronometro_cronometro__["a" /* CronometroPage */], {
                sprint: this.sprint,
                dateSprint: this.dateSprint,
                choiceSprint: this.choiceSprint
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Preencha todos os campos corretamente!",
                duration: 2000
            });
            toast.present();
        }
    };
    HomePage.prototype.limpaCampos = function () {
        this.choiceSprint = '0';
        this.dateSprint = '';
        this.sprint = null;
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.limpaCampos();
    };
    HomePage.prototype.voltar = function () {
        this.navCtrl.push("ExerciciosPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n    <img  style="width: 50px; height: 50px;" src="assets/imgs/voltar.png" (click)="voltar()" />\n\n\n\n  <p style="text-align: center; color: black">{{ mensagem }}</p>\n\n  <form [formGroup]="sprintForm" (submit)="burn()" novalidate>\n\n    <ion-item>\n\n      <ion-label floating style="color: black">Tempo de cada exercício (em minutos)</ion-label>\n\n      <ion-input type="number" [(ngModel)]="sprint" formControlName="sprint"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Dia do exercício</ion-label>\n\n      <ion-datetime formControlName="dateSprint" [(ngModel)]="dateSprint" cancelText="Cancelar" okText="Confirmar" displayFormat="DD/MM/YYYY" pickerFormat="DD/MMMM/YYYY"\n\n        monthNames="janeiro, fevereiro, mar\u00e7o, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro" color="secondary"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Quantidade de atividades</ion-label>\n\n      <ion-range formControlName="choiceSprint" min="0" max="10" pin="true" [(ngModel)]="choiceSprint" color="secondary">\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <br><br><br><br>\n\n    <button ion-button block outline style="color:black;border-color: black">Queimar gorduras!</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.isenabled = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menuCtrl.enable(false, 'myMenu');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'myMenu');
    };
    LoginPage.prototype.Entrar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\login\login.html"*/'<ion-content >\n\n  <img src="assets/imgs/login.png" style="width: 140px; height: 140px"/>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <img  src="assets/imgs/tw.png" style="width: 30px; height: 30p;margin-right: 7%"  (click)="Entrar()"/>\n\n  <img  src="assets/imgs/fb.png" style="width: 30px; height: 30p;"  (click)="Entrar()"/>\n\n  <img  src="assets/imgs/gm.png" style="width: 30px; height: 30p;margin-left: 7%"  (click)="Entrar()"/>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\angleby.vieira\Documents\Learning\workspace\ionic\Projeto\FitTools\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map