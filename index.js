const Jsl_0x4d4570=Jsl_0x5ab8;(function(_0x4a409f,_0x3d30b6){const _0x43d571=Jsl_0x5ab8,_0x2687cc=_0x4a409f();while(!![]){try{const _0x5afdbc=parseInt(_0x43d571(0x142))/0x1+-parseInt(_0x43d571(0x15c))/0x2+parseInt(_0x43d571(0x143))/0x3+parseInt(_0x43d571(0x11a))/0x4*(-parseInt(_0x43d571(0x104))/0x5)+-parseInt(_0x43d571(0x14f))/0x6+parseInt(_0x43d571(0x15e))/0x7*(-parseInt(_0x43d571(0x115))/0x8)+parseInt(_0x43d571(0x102))/0x9;if(_0x5afdbc===_0x3d30b6)break;else _0x2687cc['push'](_0x2687cc['shift']());}catch(_0x26a02c){_0x2687cc['push'](_0x2687cc['shift']());}}}(Jsl_0x344c,0xb0791));const {default:makeWASocket,Browsers,makeInMemoryStore,useMultiFileAuthState}=require(Jsl_0x4d4570(0x117)),fs=require('fs'),{serialize}=require(Jsl_0x4d4570(0x107)),{Message,Image,Sticker}=require(Jsl_0x4d4570(0x100)),pino=require(Jsl_0x4d4570(0x116)),path=require(Jsl_0x4d4570(0x12f)),events=require(Jsl_0x4d4570(0x14a)),got=require(Jsl_0x4d4570(0xfb)),config=require('./config'),{PluginDB}=require(Jsl_0x4d4570(0x105)),Greetings=require(Jsl_0x4d4570(0x150)),{MakeSession}=require(Jsl_0x4d4570(0x14e)),{DATABASE,VERSION}=require(Jsl_0x4d4570(0x114)),store=makeInMemoryStore({'logger':pino()['child']({'level':Jsl_0x4d4570(0x158),'stream':Jsl_0x4d4570(0x126)})});require(Jsl_0x4d4570(0x113))['EventEmitter'][Jsl_0x4d4570(0x15b)]=0x1f4;!fs[Jsl_0x4d4570(0x106)]('./temp/session.json')&&MakeSession(config[Jsl_0x4d4570(0x11e)],Jsl_0x4d4570(0x124))[Jsl_0x4d4570(0x11f)];fs['readdirSync'](Jsl_0x4d4570(0x145))[Jsl_0x4d4570(0x151)](_0x26df49=>{const _0x1ec3de=Jsl_0x4d4570;path[_0x1ec3de(0x14c)](_0x26df49)['toLowerCase']()==_0x1ec3de(0x11c)&&require(_0x1ec3de(0x145)+_0x26df49);});async function Jsl(){const _0x4485cc=Jsl_0x4d4570;await config[_0x4485cc(0x152)][_0x4485cc(0x123)]();const {state:_0x3cbb6e,saveState:_0x22bfbe}=useSingleFileAuthState(_0x4485cc(0x137),pino({'level':_0x4485cc(0x158)}));let _0x5660e5=makeWASocket({'logger':pino({'level':_0x4485cc(0x158)}),'auth':_0x3cbb6e,'printQRInTerminal':!![],'generateHighQualityLinkPreview':!![],'browser':Browsers[_0x4485cc(0x121)](_0x4485cc(0x154)),'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![],'getMessage':async _0x4a03b1=>(store[_0x4485cc(0x10e)](_0x4a03b1['id'])||{})[_0x4485cc(0x15a)]||{'conversation':null}});store['readFromFile'](_0x4485cc(0x12a)),setInterval(()=>{const _0x145e9c=_0x4485cc;store[_0x145e9c(0x14b)]('./lib/ss/store_multi.json');},0x1e*0x3e8),store[_0x4485cc(0x131)](_0x5660e5['ev']),_0x5660e5['ev']['on'](_0x4485cc(0x13f),_0x22bfbe),_0x5660e5['ev']['on'](_0x4485cc(0x132),async _0x34a075=>{const _0xf7d6bd=_0x4485cc,{connection:_0x1a222d,lastDisconnect:_0x48a6b2}=_0x34a075;_0x1a222d==='connecting'&&console[_0xf7d6bd(0x149)](_0xf7d6bd(0x130)+VERSION);_0x1a222d===_0xf7d6bd(0x13a)&&_0x48a6b2&&_0x48a6b2[_0xf7d6bd(0x118)]&&_0x48a6b2[_0xf7d6bd(0x118)][_0xf7d6bd(0x109)]['statusCode']!=0x191&&(console[_0xf7d6bd(0x149)](_0x48a6b2['error'][_0xf7d6bd(0x109)]['payload']),Jsl());if(_0x1a222d===_0xf7d6bd(0x10a)){console['log'](_0xf7d6bd(0x156)),console[_0xf7d6bd(0x149)](_0xf7d6bd(0x10b));let _0x2b47f6=await PluginDB[_0xf7d6bd(0x155)]();_0x2b47f6[_0xf7d6bd(0x108)](async _0xf270e2=>{const _0x6e9ba3=_0xf7d6bd;if(!fs['existsSync']('./plugins/'+_0xf270e2['dataValues'][_0x6e9ba3(0x110)]+_0x6e9ba3(0x11c))){console['log'](_0xf270e2['dataValues'][_0x6e9ba3(0x110)]);var _0x4f5f20=await got(_0xf270e2[_0x6e9ba3(0x12c)][_0x6e9ba3(0xfd)]);_0x4f5f20[_0x6e9ba3(0x136)]==0xc8&&(fs[_0x6e9ba3(0x14d)](_0x6e9ba3(0x120)+_0xf270e2['dataValues'][_0x6e9ba3(0x110)]+'.js',_0x4f5f20[_0x6e9ba3(0x11d)]),require('./plugins/'+_0xf270e2[_0x6e9ba3(0x12c)][_0x6e9ba3(0x110)]+'.js'));}}),fs[_0xf7d6bd(0x153)](_0xf7d6bd(0x127))[_0xf7d6bd(0x151)](_0x506e8a=>{const _0x284f7b=_0xf7d6bd;path['extname'](_0x506e8a)[_0x284f7b(0x13c)]()=='.js'&&require(_0x284f7b(0x120)+_0x506e8a);}),console['log'](_0xf7d6bd(0xfa));let _0x2044aa='```💗\x20𝙰𝙱𝚄\x20𝙼𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙶\x20\x0aversion\x20:\x20'+require('./package.json')['version']+'\x0a𝚃𝙾𝚃𝙰𝙻\x20𝙿𝙻𝙸𝙶𝙸𝙽𝚂\x20:\x20'+events[_0xf7d6bd(0xff)][_0xf7d6bd(0x10d)]+_0xf7d6bd(0x148)+config[_0xf7d6bd(0x134)]+_0xf7d6bd(0x119);_0x5660e5[_0xf7d6bd(0x125)](_0x5660e5['user']['id'],{'text':_0x2044aa});try{_0x5660e5['ev']['on'](_0xf7d6bd(0x128),async _0x5d16a7=>{Greetings(_0x5d16a7,_0x5660e5);}),_0x5660e5['ev']['on'](_0xf7d6bd(0x147),async _0x1dacea=>{const _0x5f1e28=_0xf7d6bd;if(_0x1dacea[_0x5f1e28(0x138)]!=='notify')return;let _0x441449=_0x1dacea['messages'][0x0],_0x208e13=await serialize(JSON[_0x5f1e28(0x11b)](JSON[_0x5f1e28(0x111)](_0x441449)),_0x5660e5);if(!_0x208e13[_0x5f1e28(0x15a)])return;let _0x34c5ca=_0x208e13['body'];if(_0x34c5ca&&config[_0x5f1e28(0x10c)])console[_0x5f1e28(0x149)]('At\x20:\x20'+(_0x208e13[_0x5f1e28(0x122)][_0x5f1e28(0xfc)](_0x5f1e28(0x139))?(await _0x5660e5['groupMetadata'](_0x208e13[_0x5f1e28(0x122)]))[_0x5f1e28(0x141)]:_0x208e13['from'])+_0x5f1e28(0x12d)+_0x208e13[_0x5f1e28(0x12e)]+_0x5f1e28(0x112)+_0x34c5ca);events[_0x5f1e28(0xff)][_0x5f1e28(0x108)](async _0xc1e421=>{const _0x130207=_0x5f1e28;if(_0xc1e421[_0x130207(0x133)]&&!config[_0x130207(0xfe)][_0x130207(0x129)](',')[_0x130207(0x13e)](_0x208e13['sender']['split']('@')[0x0]||!_0x208e13[_0x130207(0x159)]))return;let _0x3ce370;_0x34c5ca&&(_0x3ce370=_0x34c5ca[_0x130207(0x15d)]()[_0x130207(0x129)](/ +/)[0x0],_0x208e13[_0x130207(0x12b)]=new RegExp(config[_0x130207(0x10f)])[_0x130207(0x101)](_0x34c5ca)?_0x34c5ca['split']('')[_0x130207(0x144)]():',');if(_0xc1e421[_0x130207(0x103)]&&_0xc1e421['pattern']['test'](_0x3ce370)){var _0x1d2c2a;try{_0x1d2c2a=_0x34c5ca[_0x130207(0x146)](new RegExp(_0x3ce370,'i'),'')[_0x130207(0x15d)]();}catch{_0x1d2c2a=![];}whats=new Message(_0x5660e5,_0x208e13,_0x441449),_0xc1e421[_0x130207(0x157)](whats,_0x1d2c2a,_0x208e13,_0x5660e5);}else{if(_0x34c5ca&&_0xc1e421['on']==='text')whats=new Message(_0x5660e5,_0x208e13,_0x441449),_0xc1e421['function'](whats,_0x34c5ca,_0x208e13,_0x5660e5,_0x1dacea);else{if((_0xc1e421['on']==='image'||_0xc1e421['on']===_0x130207(0x13b))&&_0x208e13[_0x130207(0x138)]===_0x130207(0x140))whats=new Image(_0x5660e5,_0x208e13,_0x441449),_0xc1e421['function'](whats,_0x34c5ca,_0x208e13,_0x5660e5,_0x1dacea,_0x441449);else _0xc1e421['on']===_0x130207(0xf9)&&_0x208e13[_0x130207(0x138)]===_0x130207(0x13d)&&(whats=new Sticker(_0x5660e5,_0x208e13,_0x441449),_0xc1e421[_0x130207(0x157)](whats,_0x208e13,_0x5660e5,_0x1dacea,_0x441449));}}});});}catch(_0x3ef1ed){console[_0xf7d6bd(0x149)](_0x3ef1ed+'\x0a\x0a\x0a\x0a\x0a'+JSON['stringify'](msg));}}}),process['on'](_0x4485cc(0x135),_0xe78b3a=>{const _0x33ae3c=_0x4485cc;let _0x1a06de=_0xe78b3a[_0x33ae3c(0x15a)];console[_0x33ae3c(0x149)](_0xe78b3a);});}function Jsl_0x5ab8(_0x167a2f,_0x1f7a37){const _0x344c6f=Jsl_0x344c();return Jsl_0x5ab8=function(_0x5ab85e,_0x3406e5){_0x5ab85e=_0x5ab85e-0xf9;let _0x2e7189=_0x344c6f[_0x5ab85e];return _0x2e7189;},Jsl_0x5ab8(_0x167a2f,_0x1f7a37);}function Jsl_0x344c(){const _0x2b46f2=['.js','body','SESSION_ID','then','./plugins/','macOS','from','sync','./temp/session.json','sendMessage','store','./plugins','group-participants.update','split','./lib/ss/baileys/store_multi.json','prefix','dataValues','\x0aFrom\x20:\x20','sender','path','Abu\x20MD\x20','bind','connection.update','fromMe','MODE','uncaughtException','statusCode','./lib/ss/auth_info.json','type','@g.us','close','photo','toLowerCase','stickerMessage','includes','creds.update','imageMessage','subject','1150723VbXOOM','1550538MDgxdF','shift','./lib/db/','replace','messages.upsert','\x0a𝙼𝙾𝙳𝙴\x20:\x20','log','./lib/utils','writeToFile','extname','writeFileSync','./lib/session','220500XwRpHt','./lib/Greetings','forEach','DATABASE','readdirSync','Desktop','findAll','Session\x20Restored\x20✅!','function','silent','isSelf','message','defaultMaxListeners','1238628RZGNTE','trim','96173amDFQC','sticker','✅\x20Plugins\x20Installed!','got','endsWith','url','SUDO','commands','./lib/Base','test','8159373WlETLZ','pattern','1854725KQplHe','./lib/db/plugins','existsSync','./lib/serialize','map','output','open','Installing\x20Plugins\x20✅','LOGS','length','loadMessage','HANDLERS','name','stringify','\x0aMessage:','events','./config','48KLPxfu','pino','@adiwajshing/baileys','error','```','12JeIDEP','parse'];Jsl_0x344c=function(){return _0x2b46f2;};return Jsl_0x344c();}setTimeout(()=>{Jsl();},0xbb8);
