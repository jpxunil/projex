"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = void 0;
var Setting_1 = require("../../models/Setting");
var wbotMessageListener_1 = require("./wbotMessageListener");
var Mustache_1 = require("../../helpers/Mustache");
var puppeteer_1 = require("puppeteer");
var axios_1 = require("axios");
var UpdateTicketService_1 = require("../TicketServices/UpdateTicketService");
var fs_1 = require("fs");
var provider = function (ticket, msg, companyId, contact, wbot) { return __awaiter(void 0, void 0, void 0, function () {
    var filaescolhida, cpfcnpj, asaastoken, ixcapikey, urlixcdb, ipmkauth, clientidmkauth, clientesecretmkauth, urlmkauth_1, url, Client_Id, Client_Secret, ixckeybase64_1, urlixc_1, asaastk_1, cnpj_cpf, numberCPFCNPJ_1, isCPFCNPJ, textMessage, error_1, body, isCPFCNPJ, body, error_2, optionsc, isCPFCNPJ, body, error_3, options, body, cpfcnpj, asaastoken, ixcapikey, urlixcdb, ipmkauth, clientidmkauth, clientesecretmkauth, urlmkauth, url, Client_Id, Client_Secret, ixckeybase64_2, urlixc_2, asaastk, cnpj_cpf, numberCPFCNPJ, isCPFCNPJ, body, error_4, options, body;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                filaescolhida = (_a = ticket.queue) === null || _a === void 0 ? void 0 : _a.name;
                if (!(filaescolhida === "2ª Via de Boleto" || filaescolhida === "2 Via de Boleto")) return [3 /*break*/, 30];
                cpfcnpj = void 0;
                cpfcnpj = (0, wbotMessageListener_1.getBodyMessage)(msg);
                cpfcnpj = cpfcnpj.replace(/\./g, '');
                cpfcnpj = cpfcnpj.replace('-', '');
                cpfcnpj = cpfcnpj.replace('/', '');
                cpfcnpj = cpfcnpj.replace(' ', '');
                cpfcnpj = cpfcnpj.replace(',', '');
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "asaas",
                            companyId: companyId
                        }
                    })];
            case 1:
                asaastoken = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "tokenixc",
                            companyId: companyId
                        }
                    })];
            case 2:
                ixcapikey = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "ipixc",
                            companyId: companyId
                        }
                    })];
            case 3:
                urlixcdb = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "ipmkauth",
                            companyId: companyId
                        }
                    })];
            case 4:
                ipmkauth = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "clientidmkauth",
                            companyId: companyId
                        }
                    })];
            case 5:
                clientidmkauth = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "clientsecretmkauth",
                            companyId: companyId
                        }
                    })];
            case 6:
                clientesecretmkauth = _b.sent();
                urlmkauth_1 = ipmkauth.value;
                if (urlmkauth_1.substr(-1) === '/') {
                    urlmkauth_1 = urlmkauth_1.slice(0, -1);
                }
                url = "".concat(urlmkauth_1, "/api/");
                Client_Id = clientidmkauth.value;
                Client_Secret = clientesecretmkauth.value;
                ixckeybase64_1 = btoa(ixcapikey.value);
                urlixc_1 = urlixcdb.value;
                asaastk_1 = asaastoken.value;
                cnpj_cpf = (0, wbotMessageListener_1.getBodyMessage)(msg);
                numberCPFCNPJ_1 = cpfcnpj;
                if (!(urlmkauth_1 != "" && Client_Id != "" && Client_Secret != "")) return [3 /*break*/, 15];
                if (!((0, wbotMessageListener_1.isNumeric)(numberCPFCNPJ_1) === true)) return [3 /*break*/, 15];
                if (!(cpfcnpj.length > 2)) return [3 /*break*/, 15];
                isCPFCNPJ = (0, wbotMessageListener_1.validaCpfCnpj)(numberCPFCNPJ_1);
                if (!isCPFCNPJ) return [3 /*break*/, 12];
                textMessage = {
                    text: (0, Mustache_1.default)("Aguarde! Estamos consultando na base de dados!", contact),
                };
                _b.label = 7;
            case 7:
                _b.trys.push([7, 10, , 11]);
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 8:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage)];
            case 9:
                _b.sent();
                return [3 /*break*/, 11];
            case 10:
                error_1 = _b.sent();
                return [3 /*break*/, 11];
            case 11:
                (0, axios_1.default)({
                    rejectUnauthorized: true,
                    method: 'get',
                    url: url,
                    auth: {
                        username: Client_Id,
                        password: Client_Secret
                    }
                })
                    .then(function (response) {
                    var jtw = response.data;
                    var config = {
                        method: 'GET',
                        url: "".concat(urlmkauth_1, "/api/cliente/show/").concat(numberCPFCNPJ_1),
                        headers: {
                            Authorization: "Bearer ".concat(jtw)
                        }
                    };
                    axios_1.default.request(config)
                        .then(function (response) {
                        return __awaiter(this, void 0, void 0, function () {
                            var textMessage_1, error_5, nome, cpf_cnpj, qrcode, valor, bloqueado, linhadig, uuid_cliente, referencia, status_1, datavenc, descricao, titulo_1, statusCorrigido, valorCorrigido, curdate, mesCorreto, ano, mes, dia, anoMesDia, textMessage_2, bodyBoleto, bodyLinha, bodyPdf_1, bodyqrcode, linkBoleto, bodyPdf, bodyPdfQr, nomePDF_1, bodyBloqueio, bodyqrcode, optionsdesbloq, bodyfinaliza, error_6;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(response.data == 'NULL')) return [3 /*break*/, 6];
                                        textMessage_1 = {
                                            text: (0, Mustache_1.default)("Cadastro n\u00E3o localizado! *CPF/CNPJ* incorreto ou inv\u00E1lido. Tenta novamente!", contact),
                                        };
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 4, , 5]);
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage_1)];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        error_5 = _a.sent();
                                        console.log('Não consegui enviar a mensagem!');
                                        return [3 /*break*/, 5];
                                    case 5: return [3 /*break*/, 33];
                                    case 6:
                                        nome = void 0;
                                        cpf_cnpj = void 0;
                                        qrcode = void 0;
                                        valor = void 0;
                                        bloqueado = void 0;
                                        linhadig = void 0;
                                        uuid_cliente = void 0;
                                        referencia = void 0;
                                        datavenc = void 0;
                                        descricao = void 0;
                                        statusCorrigido = void 0;
                                        valorCorrigido = void 0;
                                        nome = response.data.dados_cliente.titulos.nome;
                                        cpf_cnpj = response.data.dados_cliente.titulos.cpf_cnpj;
                                        valor = response.data.dados_cliente.titulos.valor;
                                        bloqueado = response.data.dados_cliente.titulos.bloqueado;
                                        uuid_cliente = response.data.dados_cliente.titulos.uuid_cliente;
                                        qrcode = response.data.dados_cliente.titulos.qrcode;
                                        linhadig = response.data.dados_cliente.titulos.linhadig;
                                        referencia = response.data.dados_cliente.titulos.referencia;
                                        status_1 = response.data.dados_cliente.titulos.status;
                                        datavenc = response.data.dados_cliente.titulos.datavenc;
                                        descricao = response.data.dados_cliente.titulos.descricao;
                                        titulo_1 = response.data.dados_cliente.titulos.titulo;
                                        statusCorrigido = status_1[0].toUpperCase() + status_1.substr(1);
                                        valorCorrigido = valor.replace(".", ",");
                                        curdate = new Date(datavenc);
                                        mesCorreto = curdate.getMonth() + 1;
                                        ano = ('0' + curdate.getFullYear()).slice(-4);
                                        mes = ('0' + mesCorreto).slice(-2);
                                        dia = ('0' + curdate.getDate()).slice(-2);
                                        anoMesDia = "".concat(dia, "/").concat(mes, "/").concat(ano);
                                        _a.label = 7;
                                    case 7:
                                        _a.trys.push([7, 32, , 33]);
                                        textMessage_2 = { text: (0, Mustache_1.default)("Localizei seu Cadastro! *".concat(nome, "* s\u00F3 mais um instante por favor!"), contact) };
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), textMessage_2)];
                                    case 8:
                                        _a.sent();
                                        bodyBoleto = { text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Nome:* ".concat(nome, "\n*Valor:* R$ ").concat(valorCorrigido, "\n*Data Vencimento:* ").concat(anoMesDia, "\n*Link:* ").concat(urlmkauth_1, "/boleto/21boleto.php?titulo=").concat(titulo_1, "\n\nVou mandar o *c\u00F3digo de barras* na pr\u00F3xima mensagem para ficar mais f\u00E1cil para voc\u00EA copiar!"), contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 9:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoleto)];
                                    case 10:
                                        _a.sent();
                                        bodyLinha = { text: (0, Mustache_1.default)("".concat(linhadig), contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 11:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyLinha)];
                                    case 12:
                                        _a.sent();
                                        if (!(qrcode !== null)) return [3 /*break*/, 19];
                                        bodyPdf_1 = { text: (0, Mustache_1.default)("Este \u00E9 o *PIX COPIA E COLA*", contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 13:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_1)];
                                    case 14:
                                        _a.sent();
                                        bodyqrcode = { text: (0, Mustache_1.default)("".concat(qrcode), contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 15:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                    case 16:
                                        _a.sent();
                                        linkBoleto = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=L|0&chl=".concat(qrcode);
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 17:
                                        _a.sent();
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sendMessageImage)(wbot, contact, ticket, linkBoleto, "")];
                                    case 18:
                                        _a.sent();
                                        _a.label = 19;
                                    case 19:
                                        bodyPdf = { text: (0, Mustache_1.default)("Agora vou te enviar o boleto em *PDF* caso voc\u00EA precise.", contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 20:
                                        _a.sent();
                                        bodyPdfQr = { text: (0, Mustache_1.default)("".concat(bodyPdf), contact) };
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdfQr)];
                                    case 21:
                                        _a.sent();
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)
                                            //GERA O PDF
                                        ];
                                    case 22:
                                        _a.sent();
                                        nomePDF_1 = "Boleto-".concat(nome, "-").concat(dia, "-").concat(mes, "-").concat(ano, ".pdf");
                                        (function () { return __awaiter(_this, void 0, void 0, function () {
                                            var browser, page, website_url, pdf;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, puppeteer_1.default.launch({ args: ['--no-sandbox'] })];
                                                    case 1:
                                                        browser = _a.sent();
                                                        return [4 /*yield*/, browser.newPage()];
                                                    case 2:
                                                        page = _a.sent();
                                                        website_url = "".concat(urlmkauth_1, "/boleto/21boleto.php?titulo=").concat(titulo_1);
                                                        return [4 /*yield*/, page.goto(website_url, { waitUntil: 'networkidle0' })];
                                                    case 3:
                                                        _a.sent();
                                                        return [4 /*yield*/, page.emulateMediaType('screen')];
                                                    case 4:
                                                        _a.sent();
                                                        return [4 /*yield*/, page.pdf({
                                                                path: nomePDF_1,
                                                                printBackground: true,
                                                                format: 'A4',
                                                            })];
                                                    case 5:
                                                        pdf = _a.sent();
                                                        return [4 /*yield*/, browser.close()];
                                                    case 6:
                                                        _a.sent();
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sendMessageLink)(wbot, contact, ticket, nomePDF_1, nomePDF_1)];
                                                    case 7:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        if (!(bloqueado === 'sim')) return [3 /*break*/, 27];
                                        bodyBloqueio = { text: (0, Mustache_1.default)("".concat(nome, " vi tambem que a sua conex\u00E3o esta bloqueada! Vou desbloquear para voc\u00EA por *48 horas*."), contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 23:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBloqueio)];
                                    case 24:
                                        _a.sent();
                                        bodyqrcode = { text: (0, Mustache_1.default)("Estou liberando seu acesso. Por favor aguarde!", contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 25:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                    case 26:
                                        _a.sent();
                                        optionsdesbloq = {
                                            method: 'GET',
                                            url: "".concat(urlmkauth_1, "/api/cliente/desbloqueio/").concat(uuid_cliente),
                                            headers: {
                                                Authorization: "Bearer ".concat(jtw)
                                            }
                                        };
                                        axios_1.default.request(optionsdesbloq).then(function (response) {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var bodyLiberado, bodyqrcode;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            bodyLiberado = { text: (0, Mustache_1.default)("Pronto liberei! Vou precisar que voc\u00EA *retire* seu equipamento da tomada.\n\n*OBS: Somente retire da tomada.* \nAguarde 1 minuto e ligue novamente!", contact) };
                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                        case 1:
                                                            _a.sent();
                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyLiberado)];
                                                        case 2:
                                                            _a.sent();
                                                            bodyqrcode = { text: (0, Mustache_1.default)("Veja se seu acesso voltou! Caso nao tenha voltado retorne o contato e fale com um atendente!", contact) };
                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                        case 3:
                                                            _a.sent();
                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                                        case 4:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        }).catch(function (error) {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var bodyfinaliza;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            bodyfinaliza = { text: (0, Mustache_1.default)("Opss! Algo de errado aconteceu! Digite *#* para voltar ao menu anterior e fale com um atendente!", contact) };
                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        });
                                        _a.label = 27;
                                    case 27:
                                        bodyfinaliza = { text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(12000)];
                                    case 28:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                    case 29:
                                        _a.sent();
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 30:
                                        _a.sent();
                                        fs_1.default.unlink(nomePDF_1, function (err) {
                                            if (err)
                                                throw err;
                                            console.log(err);
                                        });
                                        return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                ticketData: { status: "closed" },
                                                ticketId: ticket.id,
                                                companyId: ticket.companyId,
                                            })];
                                    case 31:
                                        _a.sent();
                                        return [3 /*break*/, 33];
                                    case 32:
                                        error_6 = _a.sent();
                                        console.log('11 Não consegui enviar a mensagem!');
                                        return [3 /*break*/, 33];
                                    case 33: return [2 /*return*/];
                                }
                            });
                        });
                    })
                        .catch(function (error) {
                        return __awaiter(this, void 0, void 0, function () {
                            var bodyBoleto, error_7;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        bodyBoleto = { text: (0, Mustache_1.default)("N\u00E3o consegui encontrar seu cadastro.\n\nPor favor tente novamente!\nOu digite *#* para voltar ao *Menu Anterior*", contact) };
                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoleto)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_7 = _a.sent();
                                        console.log('111 Não consegui enviar a mensagem!');
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                })
                    .catch(function (error) {
                    return __awaiter(this, void 0, void 0, function () {
                        var bodyfinaliza;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    bodyfinaliza = { text: (0, Mustache_1.default)("Opss! Algo de errado aconteceu! Digite *#* para voltar ao menu anterior e fale com um atendente!", contact) };
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [3 /*break*/, 15];
            case 12:
                body = { text: (0, Mustache_1.default)("Este CPF/CNPJ n\u00E3o \u00E9 v\u00E1lido!\n\nPor favor tente novamente!\nOu digite *#* para voltar ao *Menu Anterior*", contact) };
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 13:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 14:
                _b.sent();
                _b.label = 15;
            case 15:
                if (!(asaastoken.value !== "")) return [3 /*break*/, 21];
                if (!((0, wbotMessageListener_1.isNumeric)(numberCPFCNPJ_1) === true)) return [3 /*break*/, 21];
                if (!(cpfcnpj.length > 2)) return [3 /*break*/, 21];
                isCPFCNPJ = (0, wbotMessageListener_1.validaCpfCnpj)(numberCPFCNPJ_1);
                if (!isCPFCNPJ) return [3 /*break*/, 21];
                body = {
                    text: (0, Mustache_1.default)("Aguarde! Estamos consultando na base de dados!", contact),
                };
                _b.label = 16;
            case 16:
                _b.trys.push([16, 19, , 20]);
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 17:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 18:
                _b.sent();
                return [3 /*break*/, 20];
            case 19:
                error_2 = _b.sent();
                return [3 /*break*/, 20];
            case 20:
                optionsc = {
                    method: 'GET',
                    url: 'https://www.asaas.com/api/v3/customers',
                    params: { cpfCnpj: numberCPFCNPJ_1 },
                    headers: {
                        'Content-Type': 'application/json',
                        access_token: asaastk_1
                    }
                };
                axios_1.default.request(optionsc).then(function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        var nome, id_cliente, totalCount, body_1, body_2, optionsListpaymentOVERDUE;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    nome = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.name;
                                    id_cliente = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id;
                                    totalCount = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.totalCount;
                                    if (!(totalCount === 0)) return [3 /*break*/, 3];
                                    body_1 = {
                                        text: (0, Mustache_1.default)("Cadastro n\u00E3o localizado! *CPF/CNPJ* incorreto ou inv\u00E1lido. Tenta novamente!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_1)];
                                case 2:
                                    _f.sent();
                                    return [3 /*break*/, 6];
                                case 3:
                                    body_2 = {
                                        text: (0, Mustache_1.default)("Localizei seu Cadastro! \n*".concat(nome, "* s\u00F3 mais um instante por favor!"), contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 4:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_2)];
                                case 5:
                                    _f.sent();
                                    optionsListpaymentOVERDUE = {
                                        method: 'GET',
                                        url: 'https://www.asaas.com/api/v3/payments',
                                        params: { customer: id_cliente, status: 'OVERDUE' },
                                        headers: {
                                            'Content-Type': 'application/json',
                                            access_token: asaastk_1
                                        }
                                    };
                                    axios_1.default.request(optionsListpaymentOVERDUE).then(function (response) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var totalCount_overdue, body_3, optionsPENDING, id_payment_overdue_1, value_overdue, description_overdue, invoiceUrl_overdue, dueDate_overdue, invoiceNumber_overdue, value_overdue_corrigida, dueDate_overdue_corrigida, body_4, bodyBoleto, optionsGetPIX;
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                                            return __generator(this, function (_r) {
                                                switch (_r.label) {
                                                    case 0:
                                                        totalCount_overdue = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.totalCount;
                                                        if (!(totalCount_overdue === 0)) return [3 /*break*/, 3];
                                                        body_3 = {
                                                            text: (0, Mustache_1.default)("Voc\u00EA n\u00E3o tem nenhuma fatura vencidada! \nVou te enviar a proxima fatura. Por favor aguarde!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 1:
                                                        _r.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_3)];
                                                    case 2:
                                                        _r.sent();
                                                        optionsPENDING = {
                                                            method: 'GET',
                                                            url: 'https://www.asaas.com/api/v3/payments',
                                                            params: { customer: id_cliente, status: 'PENDING' },
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                                access_token: asaastk_1
                                                            }
                                                        };
                                                        axios_1.default.request(optionsPENDING).then(function (response) {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                function sortfunction(a, b) {
                                                                    return a.dueDate.localeCompare(b.dueDate);
                                                                }
                                                                var ordenado, id_payment_pending, value_pending, description_pending, invoiceUrl_pending, dueDate_pending, invoiceNumber_pending, totalCount_pending, value_pending_corrigida, dueDate_pending_corrigida, bodyBoleto, optionsGetPIX;
                                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                                                                return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            ordenado = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data.sort(sortfunction);
                                                                            id_payment_pending = (_b = ordenado[0]) === null || _b === void 0 ? void 0 : _b.id;
                                                                            value_pending = (_c = ordenado[0]) === null || _c === void 0 ? void 0 : _c.value;
                                                                            description_pending = (_d = ordenado[0]) === null || _d === void 0 ? void 0 : _d.description;
                                                                            invoiceUrl_pending = (_e = ordenado[0]) === null || _e === void 0 ? void 0 : _e.invoiceUrl;
                                                                            dueDate_pending = (_f = ordenado[0]) === null || _f === void 0 ? void 0 : _f.dueDate;
                                                                            invoiceNumber_pending = (_g = ordenado[0]) === null || _g === void 0 ? void 0 : _g.invoiceNumber;
                                                                            totalCount_pending = (_h = response === null || response === void 0 ? void 0 : response.data) === null || _h === void 0 ? void 0 : _h.totalCount;
                                                                            dueDate_pending_corrigida = (_k = (_j = dueDate_pending === null || dueDate_pending === void 0 ? void 0 : dueDate_pending.split('-')) === null || _j === void 0 ? void 0 : _j.reverse()) === null || _k === void 0 ? void 0 : _k.join('/');
                                                                            value_pending_corrigida = value_pending.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                                                                            bodyBoleto = {
                                                                                text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Fatura:* ".concat(invoiceNumber_pending, "\n*Nome:* ").concat(nome, "\n*Valor:* R$ ").concat(value_pending_corrigida, "\n*Data Vencimento:* ").concat(dueDate_pending_corrigida, "\n*Descri\u00E7\u00E3o:*\n").concat(description_pending, "\n*Link:* ").concat(invoiceUrl_pending), contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 1:
                                                                            _l.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoleto)];
                                                                        case 2:
                                                                            _l.sent();
                                                                            optionsGetPIX = {
                                                                                method: 'GET',
                                                                                url: "https://www.asaas.com/api/v3/payments/".concat(id_payment_pending, "/pixQrCode"),
                                                                                headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    access_token: asaastk_1
                                                                                }
                                                                            };
                                                                            axios_1.default.request(optionsGetPIX).then(function (response) {
                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                    var success, payload, bodyPixCP, bodyPix, linkBoleto, optionsBoletopend;
                                                                                    var _a, _b;
                                                                                    return __generator(this, function (_c) {
                                                                                        switch (_c.label) {
                                                                                            case 0:
                                                                                                success = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.success;
                                                                                                payload = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.payload;
                                                                                                if (!(success === true)) return [3 /*break*/, 7];
                                                                                                bodyPixCP = {
                                                                                                    text: (0, Mustache_1.default)("Este \u00E9 o *PIX Copia e Cola*", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 1:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPixCP)];
                                                                                            case 2:
                                                                                                _c.sent();
                                                                                                bodyPix = {
                                                                                                    text: (0, Mustache_1.default)("".concat(payload), contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 3:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPix)];
                                                                                            case 4:
                                                                                                _c.sent();
                                                                                                linkBoleto = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=L|0&chl=".concat(payload);
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 5:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sendMessageImage)(wbot, contact, ticket, linkBoleto, '')];
                                                                                            case 6:
                                                                                                _c.sent();
                                                                                                optionsBoletopend = {
                                                                                                    method: 'GET',
                                                                                                    url: "https://www.asaas.com/api/v3/payments/".concat(id_payment_pending, "/identificationField"),
                                                                                                    headers: {
                                                                                                        'Content-Type': 'application/json',
                                                                                                        access_token: asaastk_1
                                                                                                    }
                                                                                                };
                                                                                                axios_1.default.request(optionsBoletopend).then(function (response) {
                                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                                        var codigo_barras, bodycodigoBarras, bodycodigo, bodyfinaliza, bodyfinaliza;
                                                                                                        var _a, _b;
                                                                                                        return __generator(this, function (_c) {
                                                                                                            switch (_c.label) {
                                                                                                                case 0:
                                                                                                                    codigo_barras = response.data.identificationField;
                                                                                                                    bodycodigoBarras = {
                                                                                                                        text: (0, Mustache_1.default)("".concat(codigo_barras), contact),
                                                                                                                    };
                                                                                                                    if (!(((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.code) !== 'invalid_action')) return [3 /*break*/, 9];
                                                                                                                    bodycodigo = {
                                                                                                                        text: (0, Mustache_1.default)("Este \u00E9 o *C\u00F3digo de Barras*!", contact),
                                                                                                                    };
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 1:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodycodigo)];
                                                                                                                case 2:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 3:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodycodigoBarras)];
                                                                                                                case 4:
                                                                                                                    _c.sent();
                                                                                                                    bodyfinaliza = {
                                                                                                                        text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                    };
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 5:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                case 6:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 7:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                            ticketData: { status: "closed" },
                                                                                                                            ticketId: ticket.id,
                                                                                                                            companyId: ticket.companyId,
                                                                                                                        })];
                                                                                                                case 8:
                                                                                                                    _c.sent();
                                                                                                                    return [3 /*break*/, 13];
                                                                                                                case 9:
                                                                                                                    bodyfinaliza = {
                                                                                                                        text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                    };
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 10:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                case 11:
                                                                                                                    _c.sent();
                                                                                                                    return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                            ticketData: { status: "closed" },
                                                                                                                            ticketId: ticket.id,
                                                                                                                            companyId: ticket.companyId,
                                                                                                                        })];
                                                                                                                case 12:
                                                                                                                    _c.sent();
                                                                                                                    _c.label = 13;
                                                                                                                case 13: return [2 /*return*/];
                                                                                                            }
                                                                                                        });
                                                                                                    });
                                                                                                }).catch(function (error) {
                                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                                        var bodyfinaliza;
                                                                                                        return __generator(this, function (_a) {
                                                                                                            switch (_a.label) {
                                                                                                                case 0:
                                                                                                                    bodyfinaliza = {
                                                                                                                        text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                    };
                                                                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                case 1:
                                                                                                                    _a.sent();
                                                                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                case 2:
                                                                                                                    _a.sent();
                                                                                                                    return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                            ticketData: { status: "closed" },
                                                                                                                            ticketId: ticket.id,
                                                                                                                            companyId: ticket.companyId,
                                                                                                                        })];
                                                                                                                case 3:
                                                                                                                    _a.sent();
                                                                                                                    return [2 /*return*/];
                                                                                                            }
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                                _c.label = 7;
                                                                                            case 7: return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                    var body;
                                                                                    return __generator(this, function (_a) {
                                                                                        switch (_a.label) {
                                                                                            case 0:
                                                                                                body = {
                                                                                                    text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 1:
                                                                                                _a.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                                                                            case 2:
                                                                                                _a.sent();
                                                                                                return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                });
                                                                            });
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        }).catch(function (error) {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                var body;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            body = {
                                                                                text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                                                        case 2:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        });
                                                        return [3 /*break*/, 8];
                                                    case 3:
                                                        value_overdue = void 0;
                                                        description_overdue = void 0;
                                                        invoiceUrl_overdue = void 0;
                                                        dueDate_overdue = void 0;
                                                        invoiceNumber_overdue = void 0;
                                                        value_overdue_corrigida = void 0;
                                                        dueDate_overdue_corrigida = void 0;
                                                        id_payment_overdue_1 = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.data[0]) === null || _c === void 0 ? void 0 : _c.id;
                                                        value_overdue = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.data[0]) === null || _e === void 0 ? void 0 : _e.value;
                                                        description_overdue = (_g = (_f = response === null || response === void 0 ? void 0 : response.data) === null || _f === void 0 ? void 0 : _f.data[0]) === null || _g === void 0 ? void 0 : _g.description;
                                                        invoiceUrl_overdue = (_j = (_h = response === null || response === void 0 ? void 0 : response.data) === null || _h === void 0 ? void 0 : _h.data[0]) === null || _j === void 0 ? void 0 : _j.invoiceUrl;
                                                        dueDate_overdue = (_l = (_k = response === null || response === void 0 ? void 0 : response.data) === null || _k === void 0 ? void 0 : _k.data[0]) === null || _l === void 0 ? void 0 : _l.dueDate;
                                                        invoiceNumber_overdue = (_o = (_m = response === null || response === void 0 ? void 0 : response.data) === null || _m === void 0 ? void 0 : _m.data[0]) === null || _o === void 0 ? void 0 : _o.invoiceNumber;
                                                        dueDate_overdue_corrigida = (_q = (_p = dueDate_overdue === null || dueDate_overdue === void 0 ? void 0 : dueDate_overdue.split('-')) === null || _p === void 0 ? void 0 : _p.reverse()) === null || _q === void 0 ? void 0 : _q.join('/');
                                                        value_overdue_corrigida = value_overdue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                                                        body_4 = {
                                                            text: (0, Mustache_1.default)("Voc\u00EA tem *".concat(totalCount_overdue, "* fatura(s) vencidada(s)! \nVou te enviar. Por favor aguarde!"), contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 4:
                                                        _r.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_4)];
                                                    case 5:
                                                        _r.sent();
                                                        bodyBoleto = {
                                                            text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Fatura:* ".concat(invoiceNumber_overdue, "\n*Nome:* ").concat(nome, "\n*Valor:* R$ ").concat(value_overdue_corrigida, "\n*Data Vencimento:* ").concat(dueDate_overdue_corrigida, "\n*Descri\u00E7\u00E3o:*\n").concat(description_overdue, "\n*Link:* ").concat(invoiceUrl_overdue), contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 6:
                                                        _r.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoleto)];
                                                    case 7:
                                                        _r.sent();
                                                        optionsGetPIX = {
                                                            method: 'GET',
                                                            url: "https://www.asaas.com/api/v3/payments/".concat(id_payment_overdue_1, "/pixQrCode"),
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                                access_token: asaastk_1
                                                            }
                                                        };
                                                        axios_1.default.request(optionsGetPIX).then(function (response) {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                var success, payload, bodyPixCP, bodyPix, linkBoleto, optionsBoleto;
                                                                var _a, _b;
                                                                return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            success = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.success;
                                                                            payload = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.payload;
                                                                            if (!(success === true)) return [3 /*break*/, 7];
                                                                            bodyPixCP = {
                                                                                text: (0, Mustache_1.default)("Este \u00E9 o *PIX Copia e Cola*", contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 1:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPixCP)];
                                                                        case 2:
                                                                            _c.sent();
                                                                            bodyPix = {
                                                                                text: (0, Mustache_1.default)("".concat(payload), contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 3:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPix)];
                                                                        case 4:
                                                                            _c.sent();
                                                                            linkBoleto = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=L|0&chl=".concat(payload);
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sendMessageImage)(wbot, contact, ticket, linkBoleto, '')];
                                                                        case 6:
                                                                            _c.sent();
                                                                            optionsBoleto = {
                                                                                method: 'GET',
                                                                                url: "https://www.asaas.com/api/v3/payments/".concat(id_payment_overdue_1, "/identificationField"),
                                                                                headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    access_token: asaastk_1
                                                                                }
                                                                            };
                                                                            axios_1.default.request(optionsBoleto).then(function (response) {
                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                    var codigo_barras, bodycodigoBarras, bodycodigo, bodyfinaliza, bodyfinaliza;
                                                                                    var _a, _b;
                                                                                    return __generator(this, function (_c) {
                                                                                        switch (_c.label) {
                                                                                            case 0:
                                                                                                codigo_barras = response.data.identificationField;
                                                                                                bodycodigoBarras = {
                                                                                                    text: (0, Mustache_1.default)("".concat(codigo_barras), contact),
                                                                                                };
                                                                                                if (!(((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.code) !== 'invalid_action')) return [3 /*break*/, 8];
                                                                                                bodycodigo = {
                                                                                                    text: (0, Mustache_1.default)("Este \u00E9 o *C\u00F3digo de Barras*!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 1:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodycodigo)];
                                                                                            case 2:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 3:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodycodigoBarras)];
                                                                                            case 4:
                                                                                                _c.sent();
                                                                                                bodyfinaliza = {
                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 5:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                            case 6:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                        ticketData: { status: "closed" },
                                                                                                        ticketId: ticket.id,
                                                                                                        companyId: ticket.companyId,
                                                                                                    })];
                                                                                            case 7:
                                                                                                _c.sent();
                                                                                                return [3 /*break*/, 12];
                                                                                            case 8:
                                                                                                bodyfinaliza = {
                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 9:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                            case 10:
                                                                                                _c.sent();
                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                        ticketData: { status: "closed" },
                                                                                                        ticketId: ticket.id,
                                                                                                        companyId: ticket.companyId,
                                                                                                    })];
                                                                                            case 11:
                                                                                                _c.sent();
                                                                                                _c.label = 12;
                                                                                            case 12: return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                //console.error(error);
                                                                            });
                                                                            _c.label = 7;
                                                                        case 7: return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        }).catch(function (error) {
                                                        });
                                                        _r.label = 8;
                                                    case 8: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    }).catch(function (error) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var body;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        body = {
                                                            text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    _f.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                }).catch(function (error) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = {
                                        text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                _b.label = 21;
            case 21:
                if (!(ixcapikey.value != "" && urlixcdb.value != "")) return [3 /*break*/, 30];
                if (!((0, wbotMessageListener_1.isNumeric)(numberCPFCNPJ_1) === true)) return [3 /*break*/, 30];
                if (!(cpfcnpj.length > 2)) return [3 /*break*/, 30];
                isCPFCNPJ = (0, wbotMessageListener_1.validaCpfCnpj)(numberCPFCNPJ_1);
                if (!isCPFCNPJ) return [3 /*break*/, 27];
                if (numberCPFCNPJ_1.length <= 11) {
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/(\d{3})(\d)/, "$1.$2");
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/(\d{3})(\d)/, "$1.$2");
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                }
                else {
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/^(\d{2})(\d)/, "$1.$2");
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/\.(\d{3})(\d)/, ".$1/$2");
                    numberCPFCNPJ_1 = numberCPFCNPJ_1.replace(/(\d{4})(\d)/, "$1-$2");
                }
                body = {
                    text: (0, Mustache_1.default)("Aguarde! Estamos consultando na base de dados!", contact),
                };
                _b.label = 22;
            case 22:
                _b.trys.push([22, 25, , 26]);
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 23:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 24:
                _b.sent();
                return [3 /*break*/, 26];
            case 25:
                error_3 = _b.sent();
                return [3 /*break*/, 26];
            case 26:
                options = {
                    method: 'GET',
                    url: "".concat(urlixc_1, "/webservice/v1/cliente"),
                    headers: {
                        ixcsoft: 'listar',
                        Authorization: "Basic ".concat(ixckeybase64_1)
                    },
                    data: {
                        qtype: 'cliente.cnpj_cpf',
                        query: numberCPFCNPJ_1,
                        oper: '=',
                        page: '1',
                        rp: '1',
                        sortname: 'cliente.cnpj_cpf',
                        sortorder: 'asc'
                    }
                };
                axios_1.default.request(options).then(function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body_5, body_6, error_8, nome_1, id_1, type, body_7, boleto;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    if (!(response.data.type === 'error')) return [3 /*break*/, 3];
                                    console.log("Error response", response.data.message);
                                    body_5 = {
                                        text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_5)];
                                case 2:
                                    _f.sent();
                                    _f.label = 3;
                                case 3:
                                    if (!(response.data.total === 0)) return [3 /*break*/, 9];
                                    body_6 = {
                                        text: (0, Mustache_1.default)("Cadastro n\u00E3o localizado! *CPF/CNPJ* incorreto ou inv\u00E1lido. Tenta novamente!", contact),
                                    };
                                    _f.label = 4;
                                case 4:
                                    _f.trys.push([4, 7, , 8]);
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 5:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_6)];
                                case 6:
                                    _f.sent();
                                    return [3 /*break*/, 8];
                                case 7:
                                    error_8 = _f.sent();
                                    return [3 /*break*/, 8];
                                case 8: return [3 /*break*/, 12];
                                case 9:
                                    type = void 0;
                                    nome_1 = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.razao;
                                    id_1 = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.id;
                                    type = (_e = response.data) === null || _e === void 0 ? void 0 : _e.type;
                                    body_7 = {
                                        text: (0, Mustache_1.default)("Localizei seu Cadastro! \n*".concat(nome_1, "* s\u00F3 mais um instante por favor!"), contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 10:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_7)];
                                case 11:
                                    _f.sent();
                                    boleto = {
                                        method: 'GET',
                                        url: "".concat(urlixc_1, "/webservice/v1/fn_areceber"),
                                        headers: {
                                            ixcsoft: 'listar',
                                            Authorization: "Basic ".concat(ixckeybase64_1)
                                        },
                                        data: {
                                            qtype: 'fn_areceber.id_cliente',
                                            query: id_1,
                                            oper: '=',
                                            page: '1',
                                            rp: '1',
                                            sortname: 'fn_areceber.data_vencimento',
                                            sortorder: 'asc',
                                            grid_param: '[{"TB":"fn_areceber.status", "OP" : "=", "P" : "A"}]'
                                        }
                                    };
                                    axios_1.default.request(boleto).then(function (response) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var gateway_link, valor, datavenc, datavencCorrigida, valorCorrigido, linha_digitavel, impresso, idboleto, bodyBoleto, boletopdf, optionsPix;
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                                            return __generator(this, function (_o) {
                                                idboleto = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.id;
                                                gateway_link = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.gateway_link;
                                                valor = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.registros[0]) === null || _f === void 0 ? void 0 : _f.valor;
                                                datavenc = (_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.registros[0]) === null || _h === void 0 ? void 0 : _h.data_vencimento;
                                                linha_digitavel = (_k = (_j = response.data) === null || _j === void 0 ? void 0 : _j.registros[0]) === null || _k === void 0 ? void 0 : _k.linha_digitavel;
                                                impresso = (_m = (_l = response.data) === null || _l === void 0 ? void 0 : _l.registros[0]) === null || _m === void 0 ? void 0 : _m.impresso;
                                                valorCorrigido = valor.replace(".", ",");
                                                datavencCorrigida = datavenc.split('-').reverse().join('/');
                                                bodyBoleto = {
                                                    text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Fatura:* ".concat(idboleto, "\n*Nome:* ").concat(nome_1, "\n*Valor:* R$ ").concat(valorCorrigido, "\n*Data Vencimento:* ").concat(datavencCorrigida, "\n\nVou mandar o *c\u00F3digo de barras* na pr\u00F3xima mensagem para ficar mais f\u00E1cil para voc\u00EA copiar!"), contact),
                                                };
                                                //await sleep(2000)
                                                //await wbot.sendMessage(`${ticket.contact.number}@${ticket.isGroup ? "g.us" : "s.whatsapp.net"}`, bodyBoleto);
                                                //LINHA DIGITAVEL
                                                if (impresso !== "S") {
                                                    boletopdf = {
                                                        method: 'GET',
                                                        url: "".concat(urlixc_1, "/webservice/v1/get_boleto"),
                                                        headers: {
                                                            ixcsoft: 'listar',
                                                            Authorization: "Basic ".concat(ixckeybase64_1)
                                                        },
                                                        data: {
                                                            boletos: idboleto,
                                                            juro: 'N',
                                                            multa: 'N',
                                                            atualiza_boleto: 'N',
                                                            tipo_boleto: 'arquivo',
                                                            base64: 'S'
                                                        }
                                                    };
                                                    axios_1.default.request(boletopdf).then(function (response) {
                                                    }).catch(function (error) {
                                                        console.error(error);
                                                    });
                                                }
                                                optionsPix = {
                                                    method: 'GET',
                                                    url: "".concat(urlixc_1, "/webservice/v1/get_pix"),
                                                    headers: {
                                                        ixcsoft: 'listar',
                                                        Authorization: "Basic ".concat(ixckeybase64_1)
                                                    },
                                                    data: { id_areceber: idboleto }
                                                };
                                                axios_1.default.request(optionsPix).then(function (response) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var tipo, pix, bodyBoletoPix, body_linhadigitavel, body_linha_digitavel, body_pix, body_pix_dig, body_pixqr, linkBoleto, optionscontrato, bodyBoleto_1, body_8, body_linha_digitavel, optionscontrato;
                                                        var _a, _b, _c, _d;
                                                        return __generator(this, function (_e) {
                                                            switch (_e.label) {
                                                                case 0:
                                                                    tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.type;
                                                                    pix = (_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.pix) === null || _c === void 0 ? void 0 : _c.qrCode) === null || _d === void 0 ? void 0 : _d.qrcode;
                                                                    if (!(tipo === 'success')) return [3 /*break*/, 14];
                                                                    bodyBoletoPix = {
                                                                        text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Fatura:* ".concat(idboleto, "\n*Nome:* ").concat(nome_1, "\n*Valor:* R$ ").concat(valorCorrigido, "\n*Data Vencimento:* ").concat(datavencCorrigida, "\n\nVou te enviar o *C\u00F3digo de Barras* e o *PIX* basta clicar em qual voc\u00EA quer utlizar que j\u00E1 vai copiar! Depois basta realizar o pagamento no seu banco"), contact),
                                                                    };
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoletoPix)];
                                                                case 1:
                                                                    _e.sent();
                                                                    body_linhadigitavel = {
                                                                        text: (0, Mustache_1.default)("Este é o *Código de Barras*", contact),
                                                                    };
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 2:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_linhadigitavel)];
                                                                case 3:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 4:
                                                                    _e.sent();
                                                                    body_linha_digitavel = {
                                                                        text: (0, Mustache_1.default)("".concat(linha_digitavel), contact),
                                                                    };
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_linha_digitavel)];
                                                                case 5:
                                                                    _e.sent();
                                                                    body_pix = {
                                                                        text: (0, Mustache_1.default)("Este é o *PIX Copia e Cola*", contact),
                                                                    };
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 6:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_pix)];
                                                                case 7:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 8:
                                                                    _e.sent();
                                                                    body_pix_dig = {
                                                                        text: (0, Mustache_1.default)("".concat(pix), contact),
                                                                    };
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_pix_dig)];
                                                                case 9:
                                                                    _e.sent();
                                                                    body_pixqr = {
                                                                        text: (0, Mustache_1.default)("QR CODE do *PIX*", contact),
                                                                    };
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 10:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_pixqr)];
                                                                case 11:
                                                                    _e.sent();
                                                                    linkBoleto = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=L|0&chl=".concat(pix);
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 12:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sendMessageImage)(wbot, contact, ticket, linkBoleto, '')
                                                                        ///VE SE ESTA BLOQUEADO PARA LIBERAR!
                                                                    ];
                                                                case 13:
                                                                    _e.sent();
                                                                    optionscontrato = {
                                                                        method: 'POST',
                                                                        url: "".concat(urlixc_1, "/webservice/v1/cliente_contrato"),
                                                                        headers: {
                                                                            ixcsoft: 'listar',
                                                                            Authorization: "Basic ".concat(ixckeybase64_1)
                                                                        },
                                                                        data: {
                                                                            qtype: 'cliente_contrato.id_cliente',
                                                                            query: id_1,
                                                                            oper: '=',
                                                                            page: '1',
                                                                            rp: '1',
                                                                            sortname: 'cliente_contrato.id',
                                                                            sortorder: 'asc'
                                                                        }
                                                                    };
                                                                    axios_1.default.request(optionscontrato).then(function (response) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var status_internet, id_contrato, bodyPdf, bodyqrcode, optionsdesbloqeuio, bodyfinaliza;
                                                                            var _a, _b, _c, _d;
                                                                            return __generator(this, function (_e) {
                                                                                switch (_e.label) {
                                                                                    case 0:
                                                                                        status_internet = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.status_internet;
                                                                                        id_contrato = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.id;
                                                                                        if (!(status_internet !== 'A')) return [3 /*break*/, 5];
                                                                                        bodyPdf = {
                                                                                            text: (0, Mustache_1.default)("*".concat(nome_1, "* vi tambem que a sua conex\u00E3o esta bloqueada! Vou desbloquear para voc\u00EA."), contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 1:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf)];
                                                                                    case 2:
                                                                                        _e.sent();
                                                                                        bodyqrcode = {
                                                                                            text: (0, Mustache_1.default)("Estou liberando seu acesso. Por favor aguarde!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 3:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                                                                    case 4:
                                                                                        _e.sent();
                                                                                        optionsdesbloqeuio = {
                                                                                            method: 'POST',
                                                                                            url: "".concat(urlixc_1, "/webservice/v1/desbloqueio_confianca"),
                                                                                            headers: {
                                                                                                Authorization: "Basic ".concat(ixckeybase64_1)
                                                                                            },
                                                                                            data: { id: id_contrato }
                                                                                        };
                                                                                        axios_1.default.request(optionsdesbloqeuio).then(function (response) {
                                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                                var tipo, mensagem, optionsRadius, msgerrolbieracao, bodyerro, msg_errolbieracao, bodyerroatendent;
                                                                                                var _a, _b;
                                                                                                return __generator(this, function (_c) {
                                                                                                    switch (_c.label) {
                                                                                                        case 0:
                                                                                                            tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tipo;
                                                                                                            mensagem = (_b = response.data) === null || _b === void 0 ? void 0 : _b.mensagem;
                                                                                                            if (!(tipo === 'sucesso')) return [3 /*break*/, 1];
                                                                                                            optionsRadius = {
                                                                                                                method: 'GET',
                                                                                                                url: "".concat(urlixc_1, "/webservice/v1/radusuarios"),
                                                                                                                headers: {
                                                                                                                    ixcsoft: 'listar',
                                                                                                                    Authorization: "Basic ".concat(ixckeybase64_1)
                                                                                                                },
                                                                                                                data: {
                                                                                                                    qtype: 'radusuarios.id_cliente',
                                                                                                                    query: id_1,
                                                                                                                    oper: '=',
                                                                                                                    page: '1',
                                                                                                                    rp: '1',
                                                                                                                    sortname: 'radusuarios.id',
                                                                                                                    sortorder: 'asc'
                                                                                                                }
                                                                                                            };
                                                                                                            axios_1.default.request(optionsRadius).then(function (response) {
                                                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                                                    var tipo, body_mensagem, bodyPdf_2, bodyfinaliza;
                                                                                                                    var _a;
                                                                                                                    return __generator(this, function (_b) {
                                                                                                                        switch (_b.label) {
                                                                                                                            case 0:
                                                                                                                                tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.type;
                                                                                                                                if (!(tipo === 'success')) return [3 /*break*/, 8];
                                                                                                                                body_mensagem = {
                                                                                                                                    text: (0, Mustache_1.default)("".concat(mensagem), contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 1:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                                                                            case 2:
                                                                                                                                _b.sent();
                                                                                                                                bodyPdf_2 = {
                                                                                                                                    text: (0, Mustache_1.default)("Fiz os procedimentos de libera\u00E7\u00E3o! Agora aguarde at\u00E9 5 minutos e veja se sua conex\u00E3o ir\u00E1 retornar! .\n\nCaso n\u00E3o tenha voltado, retorne o contato e fale com um atendente!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 3:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_2)];
                                                                                                                            case 4:
                                                                                                                                _b.sent();
                                                                                                                                bodyfinaliza = {
                                                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 5:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                            case 6:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                                        ticketData: { status: "closed" },
                                                                                                                                        ticketId: ticket.id,
                                                                                                                                        companyId: ticket.companyId,
                                                                                                                                    })];
                                                                                                                            case 7:
                                                                                                                                _b.sent();
                                                                                                                                _b.label = 8;
                                                                                                                            case 8: return [2 /*return*/];
                                                                                                                        }
                                                                                                                    });
                                                                                                                });
                                                                                                            }).catch(function (error) {
                                                                                                                console.error(error);
                                                                                                            });
                                                                                                            return [3 /*break*/, 8];
                                                                                                        case 1:
                                                                                                            msgerrolbieracao = response.data.mensagem;
                                                                                                            bodyerro = {
                                                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro e nao consegui desbloquear", contact),
                                                                                                            };
                                                                                                            msg_errolbieracao = {
                                                                                                                text: (0, Mustache_1.default)("".concat(msgerrolbieracao), contact),
                                                                                                            };
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 2:
                                                                                                            _c.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                                        case 3:
                                                                                                            _c.sent();
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 4:
                                                                                                            _c.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), msg_errolbieracao)];
                                                                                                        case 5:
                                                                                                            _c.sent();
                                                                                                            bodyerroatendent = {
                                                                                                                text: (0, Mustache_1.default)("Digite *#* para voltar o menu e fale com um atendente!", contact),
                                                                                                            };
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 6:
                                                                                                            _c.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerroatendent)];
                                                                                                        case 7:
                                                                                                            _c.sent();
                                                                                                            _c.label = 8;
                                                                                                        case 8: return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        }).catch(function (error) {
                                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                                var bodyerro;
                                                                                                return __generator(this, function (_a) {
                                                                                                    switch (_a.label) {
                                                                                                        case 0:
                                                                                                            bodyerro = {
                                                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                                                                            };
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 1:
                                                                                                            _a.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                                        case 2:
                                                                                                            _a.sent();
                                                                                                            return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                        return [3 /*break*/, 9];
                                                                                    case 5:
                                                                                        bodyfinaliza = {
                                                                                            text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(8000)];
                                                                                    case 6:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                    case 7:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                ticketData: { status: "closed" },
                                                                                                ticketId: ticket.id,
                                                                                                companyId: ticket.companyId,
                                                                                            })];
                                                                                    case 8:
                                                                                        _e.sent();
                                                                                        _e.label = 9;
                                                                                    case 9: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var bodyerro;
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        bodyerro = {
                                                                                            text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                    case 2:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        });
                                                                    });
                                                                    return [3 /*break*/, 21];
                                                                case 14:
                                                                    bodyBoleto_1 = {
                                                                        text: (0, Mustache_1.default)("Segue a segunda-via da sua Fatura!\n\n*Fatura:* ".concat(idboleto, "\n*Nome:* ").concat(nome_1, "\n*Valor:* R$ ").concat(valorCorrigido, "\n*Data Vencimento:* ").concat(datavencCorrigida, "\n\nBasta clicar aqui em baixo em c\u00F3digo de barras para copiar, apos isto basta realizar o pagamento em seu banco!"), contact),
                                                                    };
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 15:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyBoleto_1)];
                                                                case 16:
                                                                    _e.sent();
                                                                    body_8 = {
                                                                        text: (0, Mustache_1.default)("Este \u00E9 o *Codigo de Barras*", contact),
                                                                    };
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 17:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_8)];
                                                                case 18:
                                                                    _e.sent();
                                                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                case 19:
                                                                    _e.sent();
                                                                    body_linha_digitavel = {
                                                                        text: (0, Mustache_1.default)("".concat(linha_digitavel), contact),
                                                                    };
                                                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_linha_digitavel)];
                                                                case 20:
                                                                    _e.sent();
                                                                    optionscontrato = {
                                                                        method: 'POST',
                                                                        url: "".concat(urlixc_1, "/webservice/v1/cliente_contrato"),
                                                                        headers: {
                                                                            ixcsoft: 'listar',
                                                                            Authorization: "Basic ".concat(ixckeybase64_1)
                                                                        },
                                                                        data: {
                                                                            qtype: 'cliente_contrato.id_cliente',
                                                                            query: id_1,
                                                                            oper: '=',
                                                                            page: '1',
                                                                            rp: '1',
                                                                            sortname: 'cliente_contrato.id',
                                                                            sortorder: 'asc'
                                                                        }
                                                                    };
                                                                    axios_1.default.request(optionscontrato).then(function (response) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var status_internet, id_contrato, bodyPdf, bodyqrcode, optionsdesbloqeuio, bodyfinaliza;
                                                                            var _a, _b, _c, _d;
                                                                            return __generator(this, function (_e) {
                                                                                switch (_e.label) {
                                                                                    case 0:
                                                                                        status_internet = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.status_internet;
                                                                                        id_contrato = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.id;
                                                                                        if (!(status_internet !== 'A')) return [3 /*break*/, 5];
                                                                                        bodyPdf = {
                                                                                            text: (0, Mustache_1.default)("*".concat(nome_1, "* vi tambem que a sua conex\u00E3o esta bloqueada! Vou desbloquear para voc\u00EA."), contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 1:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf)];
                                                                                    case 2:
                                                                                        _e.sent();
                                                                                        bodyqrcode = {
                                                                                            text: (0, Mustache_1.default)("Estou liberando seu acesso. Por favor aguarde!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 3:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                                                                    case 4:
                                                                                        _e.sent();
                                                                                        optionsdesbloqeuio = {
                                                                                            method: 'POST',
                                                                                            url: "".concat(urlixc_1, "/webservice/v1/desbloqueio_confianca"),
                                                                                            headers: {
                                                                                                Authorization: "Basic ".concat(ixckeybase64_1)
                                                                                            },
                                                                                            data: { id: id_contrato }
                                                                                        };
                                                                                        axios_1.default.request(optionsdesbloqeuio).then(function (response) {
                                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                                var tipo, mensagem, optionsRadius, bodyerro;
                                                                                                var _a, _b;
                                                                                                return __generator(this, function (_c) {
                                                                                                    switch (_c.label) {
                                                                                                        case 0:
                                                                                                            tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tipo;
                                                                                                            mensagem = (_b = response.data) === null || _b === void 0 ? void 0 : _b.mensagem;
                                                                                                            if (!(tipo === 'sucesso')) return [3 /*break*/, 1];
                                                                                                            optionsRadius = {
                                                                                                                method: 'GET',
                                                                                                                url: "".concat(urlixc_1, "/webservice/v1/radusuarios"),
                                                                                                                headers: {
                                                                                                                    ixcsoft: 'listar',
                                                                                                                    Authorization: "Basic ".concat(ixckeybase64_1)
                                                                                                                },
                                                                                                                data: {
                                                                                                                    qtype: 'radusuarios.id_cliente',
                                                                                                                    query: id_1,
                                                                                                                    oper: '=',
                                                                                                                    page: '1',
                                                                                                                    rp: '1',
                                                                                                                    sortname: 'radusuarios.id',
                                                                                                                    sortorder: 'asc'
                                                                                                                }
                                                                                                            };
                                                                                                            axios_1.default.request(optionsRadius).then(function (response) {
                                                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                                                    var tipo, body_mensagem, bodyPdf_3, bodyfinaliza, bodyPdf_4, bodyqrcode_1, bodyfinaliza;
                                                                                                                    var _a;
                                                                                                                    return __generator(this, function (_b) {
                                                                                                                        switch (_b.label) {
                                                                                                                            case 0:
                                                                                                                                tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.type;
                                                                                                                                body_mensagem = {
                                                                                                                                    text: (0, Mustache_1.default)("".concat(mensagem), contact),
                                                                                                                                };
                                                                                                                                if (!(tipo === 'success')) return [3 /*break*/, 8];
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 1:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                                                                            case 2:
                                                                                                                                _b.sent();
                                                                                                                                bodyPdf_3 = {
                                                                                                                                    text: (0, Mustache_1.default)("Fiz os procedimentos de libera\u00E7\u00E3o! Agora aguarde at\u00E9 5 minutos e veja se sua conex\u00E3o ir\u00E1 retornar! .\n\nCaso n\u00E3o tenha voltado, retorne o contato e fale com um atendente!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 3:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_3)];
                                                                                                                            case 4:
                                                                                                                                _b.sent();
                                                                                                                                bodyfinaliza = {
                                                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 5:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                            case 6:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                                        ticketData: { status: "closed" },
                                                                                                                                        ticketId: ticket.id,
                                                                                                                                        companyId: ticket.companyId,
                                                                                                                                    })];
                                                                                                                            case 7:
                                                                                                                                _b.sent();
                                                                                                                                return [3 /*break*/, 18];
                                                                                                                            case 8: return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 9:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                                                                            case 10:
                                                                                                                                _b.sent();
                                                                                                                                bodyPdf_4 = {
                                                                                                                                    text: (0, Mustache_1.default)("Vou precisar que voc\u00EA *retire* seu equipamento da tomada.\n\n*OBS: Somente retire da tomada.* \nAguarde 1 minuto e ligue novamente!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 11:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_4)];
                                                                                                                            case 12:
                                                                                                                                _b.sent();
                                                                                                                                bodyqrcode_1 = {
                                                                                                                                    text: (0, Mustache_1.default)("Veja se seu acesso voltou! Caso n\u00E3o tenha voltado retorne o contato e fale com um atendente!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 13:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode_1)];
                                                                                                                            case 14:
                                                                                                                                _b.sent();
                                                                                                                                bodyfinaliza = {
                                                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                                                };
                                                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                                            case 15:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                                                            case 16:
                                                                                                                                _b.sent();
                                                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                                                        ticketData: { status: "closed" },
                                                                                                                                        ticketId: ticket.id,
                                                                                                                                        companyId: ticket.companyId,
                                                                                                                                    })];
                                                                                                                            case 17:
                                                                                                                                _b.sent();
                                                                                                                                _b.label = 18;
                                                                                                                            case 18: return [2 /*return*/];
                                                                                                                        }
                                                                                                                    });
                                                                                                                });
                                                                                                            }).catch(function (error) {
                                                                                                                console.error(error);
                                                                                                            });
                                                                                                            return [3 /*break*/, 4];
                                                                                                        case 1:
                                                                                                            bodyerro = {
                                                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro e nao consegui desbloquear! Digite *#* e fale com um atendente!", contact),
                                                                                                            };
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 2:
                                                                                                            _c.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                                        case 3:
                                                                                                            _c.sent();
                                                                                                            _c.label = 4;
                                                                                                        case 4: return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        }).catch(function (error) {
                                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                                var bodyerro;
                                                                                                return __generator(this, function (_a) {
                                                                                                    switch (_a.label) {
                                                                                                        case 0:
                                                                                                            bodyerro = {
                                                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                                                                            };
                                                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                                        case 1:
                                                                                                            _a.sent();
                                                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                                        case 2:
                                                                                                            _a.sent();
                                                                                                            return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                        return [3 /*break*/, 9];
                                                                                    case 5:
                                                                                        bodyfinaliza = {
                                                                                            text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 6:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                    case 7:
                                                                                        _e.sent();
                                                                                        return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                ticketData: { status: "closed" },
                                                                                                ticketId: ticket.id,
                                                                                                companyId: ticket.companyId,
                                                                                            })];
                                                                                    case 8:
                                                                                        _e.sent();
                                                                                        _e.label = 9;
                                                                                    case 9: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        });
                                                                    }).catch(function (error) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var bodyerro;
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        bodyerro = {
                                                                                            text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                                                        };
                                                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                                    case 2:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        });
                                                                    });
                                                                    _e.label = 21;
                                                                case 21: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                }).catch(function (error) {
                                                    console.error(error);
                                                });
                                                return [2 /*return*/];
                                            });
                                        });
                                    }).catch(function (error) {
                                        console.error(error);
                                    });
                                    _f.label = 12;
                                case 12: return [2 /*return*/];
                            }
                        });
                    });
                }).catch(function (error) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = {
                                        text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [3 /*break*/, 30];
            case 27:
                body = {
                    text: (0, Mustache_1.default)("Este CPF/CNPJ n\u00E3o \u00E9 v\u00E1lido!\n\nPor favor tente novamente!\nOu digite *#* para voltar ao *Menu Anterior*", contact),
                };
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 28:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 29:
                _b.sent();
                _b.label = 30;
            case 30:
                if (!(filaescolhida === "Religue de Confiança" || filaescolhida === "Liberação em Confiança")) return [3 /*break*/, 45];
                cpfcnpj = void 0;
                cpfcnpj = (0, wbotMessageListener_1.getBodyMessage)(msg);
                cpfcnpj = cpfcnpj.replace(/\./g, '');
                cpfcnpj = cpfcnpj.replace('-', '');
                cpfcnpj = cpfcnpj.replace('/', '');
                cpfcnpj = cpfcnpj.replace(' ', '');
                cpfcnpj = cpfcnpj.replace(',', '');
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "asaas",
                            companyId: companyId
                        }
                    })];
            case 31:
                asaastoken = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "tokenixc",
                            companyId: companyId
                        }
                    })];
            case 32:
                ixcapikey = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "ipixc",
                            companyId: companyId
                        }
                    })];
            case 33:
                urlixcdb = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "ipmkauth",
                            companyId: companyId
                        }
                    })];
            case 34:
                ipmkauth = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "clientidmkauth",
                            companyId: companyId
                        }
                    })];
            case 35:
                clientidmkauth = _b.sent();
                return [4 /*yield*/, Setting_1.default.findOne({
                        where: {
                            key: "clientsecretmkauth",
                            companyId: companyId
                        }
                    })];
            case 36:
                clientesecretmkauth = _b.sent();
                urlmkauth = ipmkauth.value;
                if (urlmkauth.substr(-1) === '/') {
                    urlmkauth = urlmkauth.slice(0, -1);
                }
                url = "".concat(urlmkauth, "/api/");
                Client_Id = clientidmkauth.value;
                Client_Secret = clientesecretmkauth.value;
                ixckeybase64_2 = btoa(ixcapikey.value);
                urlixc_2 = urlixcdb.value;
                asaastk = asaastoken.value;
                cnpj_cpf = (0, wbotMessageListener_1.getBodyMessage)(msg);
                numberCPFCNPJ = cpfcnpj;
                if (!(ixcapikey.value != "" && urlixcdb.value != "")) return [3 /*break*/, 45];
                if (!((0, wbotMessageListener_1.isNumeric)(numberCPFCNPJ) === true)) return [3 /*break*/, 45];
                if (!(cpfcnpj.length > 2)) return [3 /*break*/, 45];
                isCPFCNPJ = (0, wbotMessageListener_1.validaCpfCnpj)(numberCPFCNPJ);
                if (!isCPFCNPJ) return [3 /*break*/, 42];
                if (numberCPFCNPJ.length <= 11) {
                    numberCPFCNPJ = numberCPFCNPJ.replace(/(\d{3})(\d)/, "$1.$2");
                    numberCPFCNPJ = numberCPFCNPJ.replace(/(\d{3})(\d)/, "$1.$2");
                    numberCPFCNPJ = numberCPFCNPJ.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                }
                else {
                    numberCPFCNPJ = numberCPFCNPJ.replace(/^(\d{2})(\d)/, "$1.$2");
                    numberCPFCNPJ = numberCPFCNPJ.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                    numberCPFCNPJ = numberCPFCNPJ.replace(/\.(\d{3})(\d)/, ".$1/$2");
                    numberCPFCNPJ = numberCPFCNPJ.replace(/(\d{4})(\d)/, "$1-$2");
                }
                body = {
                    text: (0, Mustache_1.default)("Aguarde! Estamos consultando na base de dados!", contact),
                };
                _b.label = 37;
            case 37:
                _b.trys.push([37, 40, , 41]);
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 38:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 39:
                _b.sent();
                return [3 /*break*/, 41];
            case 40:
                error_4 = _b.sent();
                return [3 /*break*/, 41];
            case 41:
                options = {
                    method: 'GET',
                    url: "".concat(urlixc_2, "/webservice/v1/cliente"),
                    headers: {
                        ixcsoft: 'listar',
                        Authorization: "Basic ".concat(ixckeybase64_2)
                    },
                    data: {
                        qtype: 'cliente.cnpj_cpf',
                        query: numberCPFCNPJ,
                        oper: '=',
                        page: '1',
                        rp: '1',
                        sortname: 'cliente.cnpj_cpf',
                        sortorder: 'asc'
                    }
                };
                axios_1.default.request(options).then(function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body_9, body_10, error_9, nome_2, id_2, type, body_11, optionscontrato;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    if (!(response.data.type === 'error')) return [3 /*break*/, 3];
                                    body_9 = {
                                        text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_9)];
                                case 2:
                                    _f.sent();
                                    _f.label = 3;
                                case 3:
                                    if (!(response.data.total === 0)) return [3 /*break*/, 9];
                                    body_10 = {
                                        text: (0, Mustache_1.default)("Cadastro n\u00E3o localizado! *CPF/CNPJ* incorreto ou inv\u00E1lido. Tenta novamente!", contact),
                                    };
                                    _f.label = 4;
                                case 4:
                                    _f.trys.push([4, 7, , 8]);
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 5:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_10)];
                                case 6:
                                    _f.sent();
                                    return [3 /*break*/, 8];
                                case 7:
                                    error_9 = _f.sent();
                                    return [3 /*break*/, 8];
                                case 8: return [3 /*break*/, 12];
                                case 9:
                                    type = void 0;
                                    nome_2 = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.razao;
                                    id_2 = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.id;
                                    type = (_e = response.data) === null || _e === void 0 ? void 0 : _e.type;
                                    body_11 = {
                                        text: (0, Mustache_1.default)("Localizei seu Cadastro! \n*".concat(nome_2, "* s\u00F3 mais um instante por favor!"), contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 10:
                                    _f.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_11)];
                                case 11:
                                    _f.sent();
                                    optionscontrato = {
                                        method: 'POST',
                                        url: "".concat(urlixc_2, "/webservice/v1/cliente_contrato"),
                                        headers: {
                                            ixcsoft: 'listar',
                                            Authorization: "Basic ".concat(ixckeybase64_2)
                                        },
                                        data: {
                                            qtype: 'cliente_contrato.id_cliente',
                                            query: id_2,
                                            oper: '=',
                                            page: '1',
                                            rp: '1',
                                            sortname: 'cliente_contrato.id',
                                            sortorder: 'asc'
                                        }
                                    };
                                    axios_1.default.request(optionscontrato).then(function (response) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var status_internet, id_contrato, bodyPdf, bodyqrcode, optionsdesbloqeuio, bodysembloqueio, bodyfinaliza;
                                            var _a, _b, _c, _d;
                                            return __generator(this, function (_e) {
                                                switch (_e.label) {
                                                    case 0:
                                                        status_internet = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.registros[0]) === null || _b === void 0 ? void 0 : _b.status_internet;
                                                        id_contrato = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.registros[0]) === null || _d === void 0 ? void 0 : _d.id;
                                                        if (!(status_internet !== 'A')) return [3 /*break*/, 5];
                                                        bodyPdf = {
                                                            text: (0, Mustache_1.default)("*".concat(nome_2, "*  a sua conex\u00E3o esta bloqueada! Vou desbloquear para voc\u00EA."), contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 1:
                                                        _e.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf)];
                                                    case 2:
                                                        _e.sent();
                                                        bodyqrcode = {
                                                            text: (0, Mustache_1.default)("Estou liberando seu acesso. Por favor aguarde!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 3:
                                                        _e.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode)];
                                                    case 4:
                                                        _e.sent();
                                                        optionsdesbloqeuio = {
                                                            method: 'POST',
                                                            url: "".concat(urlixc_2, "/webservice/v1/desbloqueio_confianca"),
                                                            headers: {
                                                                Authorization: "Basic ".concat(ixckeybase64_2)
                                                            },
                                                            data: { id: id_contrato }
                                                        };
                                                        axios_1.default.request(optionsdesbloqeuio).then(function (response) {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                var tipo, mensagem, body_mensagem, optionsRadius, bodyerro, bodyerroatendente;
                                                                var _a, _b;
                                                                return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.tipo;
                                                                            mensagem = (_b = response.data) === null || _b === void 0 ? void 0 : _b.mensagem;
                                                                            body_mensagem = {
                                                                                text: (0, Mustache_1.default)("".concat(mensagem), contact),
                                                                            };
                                                                            if (!(tipo === 'sucesso')) return [3 /*break*/, 1];
                                                                            optionsRadius = {
                                                                                method: 'GET',
                                                                                url: "".concat(urlixc_2, "/webservice/v1/radusuarios"),
                                                                                headers: {
                                                                                    ixcsoft: 'listar',
                                                                                    Authorization: "Basic ".concat(ixckeybase64_2)
                                                                                },
                                                                                data: {
                                                                                    qtype: 'radusuarios.id_cliente',
                                                                                    query: id_2,
                                                                                    oper: '=',
                                                                                    page: '1',
                                                                                    rp: '1',
                                                                                    sortname: 'radusuarios.id',
                                                                                    sortorder: 'asc'
                                                                                }
                                                                            };
                                                                            axios_1.default.request(optionsRadius).then(function (response) {
                                                                                return __awaiter(this, void 0, void 0, function () {
                                                                                    var tipo, bodyPdf_5, bodyfinaliza, bodyPdf_6, bodyqrcode_2, bodyfinaliza;
                                                                                    var _a;
                                                                                    return __generator(this, function (_b) {
                                                                                        switch (_b.label) {
                                                                                            case 0:
                                                                                                tipo = (_a = response.data) === null || _a === void 0 ? void 0 : _a.type;
                                                                                                if (!(tipo === 'success')) return [3 /*break*/, 8];
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 1:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                                            case 2:
                                                                                                _b.sent();
                                                                                                bodyPdf_5 = {
                                                                                                    text: (0, Mustache_1.default)("Fiz os procedimentos de libera\u00E7\u00E3o! Agora aguarde at\u00E9 5 minutos e veja se sua conex\u00E3o ir\u00E1 retornar! .\n\nCaso n\u00E3o tenha voltado, retorne o contato e fale com um atendente!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 3:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_5)];
                                                                                            case 4:
                                                                                                _b.sent();
                                                                                                bodyfinaliza = {
                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 5:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                            case 6:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                        ticketData: { status: "closed" },
                                                                                                        ticketId: ticket.id,
                                                                                                        companyId: ticket.companyId,
                                                                                                    })];
                                                                                            case 7:
                                                                                                _b.sent();
                                                                                                return [3 /*break*/, 18];
                                                                                            case 8: return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 9:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                                            case 10:
                                                                                                _b.sent();
                                                                                                bodyPdf_6 = {
                                                                                                    text: (0, Mustache_1.default)("Vou precisar que voc\u00EA *retire* seu equipamento da tomada.\n\n*OBS: Somente retire da tomada.* \nAguarde 1 minuto e ligue novamente!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 11:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyPdf_6)];
                                                                                            case 12:
                                                                                                _b.sent();
                                                                                                bodyqrcode_2 = {
                                                                                                    text: (0, Mustache_1.default)("Veja se seu acesso voltou! Caso n\u00E3o tenha voltado retorne o contato e fale com um atendente!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 13:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyqrcode_2)];
                                                                                            case 14:
                                                                                                _b.sent();
                                                                                                bodyfinaliza = {
                                                                                                    text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                                                                };
                                                                                                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                                            case 15:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                                                            case 16:
                                                                                                _b.sent();
                                                                                                return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                                                        ticketData: { status: "closed" },
                                                                                                        ticketId: ticket.id,
                                                                                                        companyId: ticket.companyId,
                                                                                                    })];
                                                                                            case 17:
                                                                                                _b.sent();
                                                                                                _b.label = 18;
                                                                                            case 18: return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                });
                                                                            }).catch(function (error) {
                                                                                console.error(error);
                                                                            });
                                                                            return [3 /*break*/, 8];
                                                                        case 1:
                                                                            bodyerro = {
                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro e nao consegui desbloquear!", contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 2:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                        case 3:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 4:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body_mensagem)];
                                                                        case 5:
                                                                            _c.sent();
                                                                            bodyerroatendente = {
                                                                                text: (0, Mustache_1.default)("Digite *#* e fale com um atendente!", contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 6:
                                                                            _c.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerroatendente)];
                                                                        case 7:
                                                                            _c.sent();
                                                                            _c.label = 8;
                                                                        case 8: return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        }).catch(function (error) {
                                                            return __awaiter(this, void 0, void 0, function () {
                                                                var bodyerro;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            bodyerro = {
                                                                                text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                                            };
                                                                            return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                                        case 2:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            });
                                                        });
                                                        return [3 /*break*/, 11];
                                                    case 5:
                                                        bodysembloqueio = {
                                                            text: (0, Mustache_1.default)("Sua Conex\u00E3o n\u00E3o est\u00E1 bloqueada! Caso esteja com dificuldades de navega\u00E7\u00E3o, retorne o contato e fale com um atendente!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 6:
                                                        _e.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodysembloqueio)];
                                                    case 7:
                                                        _e.sent();
                                                        bodyfinaliza = {
                                                            text: (0, Mustache_1.default)("Estamos finalizando esta conversa! Caso precise entre em contato conosco!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 8:
                                                        _e.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyfinaliza)];
                                                    case 9:
                                                        _e.sent();
                                                        return [4 /*yield*/, (0, UpdateTicketService_1.default)({
                                                                ticketData: { status: "closed" },
                                                                ticketId: ticket.id,
                                                                companyId: ticket.companyId,
                                                            })];
                                                    case 10:
                                                        _e.sent();
                                                        _e.label = 11;
                                                    case 11: return [2 /*return*/];
                                                }
                                            });
                                        });
                                    }).catch(function (error) {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var bodyerro;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        bodyerro = {
                                                            text: (0, Mustache_1.default)("Ops! Ocorreu um erro digite *#* e fale com um atendente!", contact),
                                                        };
                                                        return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), bodyerro)];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    _f.label = 12;
                                case 12: return [2 /*return*/];
                            }
                        });
                    });
                }).catch(function (error) {
                    return __awaiter(this, void 0, void 0, function () {
                        var body;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = {
                                        text: (0, Mustache_1.default)("*Opss!!!!*\nOcorreu um erro! Digite *#* e fale com um *Atendente*!", contact),
                                    };
                                    return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [3 /*break*/, 45];
            case 42:
                body = {
                    text: (0, Mustache_1.default)("Este CPF/CNPJ n\u00E3o \u00E9 v\u00E1lido!\n\nPor favor tente novamente!\nOu digite *#* para voltar ao *Menu Anterior*", contact),
                };
                return [4 /*yield*/, (0, wbotMessageListener_1.sleep)(2000)];
            case 43:
                _b.sent();
                return [4 /*yield*/, wbot.sendMessage("".concat(ticket.contact.number, "@").concat(ticket.isGroup ? "g.us" : "s.whatsapp.net"), body)];
            case 44:
                _b.sent();
                _b.label = 45;
            case 45: return [2 /*return*/];
        }
    });
}); };
exports.provider = provider;
