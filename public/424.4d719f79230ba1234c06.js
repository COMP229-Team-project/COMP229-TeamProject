(self.webpackChunkendeavours=self.webpackChunkendeavours||[]).push([[424],{6424:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AdminModule:()=>Q});var n=r(7716),o=r(4655),i=r(4551);let s=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(t,e){return!!this.auth.authenticated||(this.router.navigate(["/login"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(o.F0),n.LFG(i.e))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var a=r(4466);function u(t,e,r,n,o,i,s){try{var a=t[i](s),u=a.value}catch(l){return void r(l)}a.done?e(u):Promise.resolve(u).then(n,o)}var l=r(3679),c=r(7453),m=r(5377),d=r(3738),f=r(8583),p=r(8295),g=r(9983),h=r(1095);function w(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div"),n.TgZ(1,"h3"),n._uU(2,"Create Account"),n.qZA(),n.TgZ(3,"button",9),n.NdJ("click",function(){return n.CHM(t),n.oxw().changeType("login")}),n._uU(4," Returning user? "),n.qZA(),n.qZA()}}function v(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div"),n.TgZ(1,"h3"),n._uU(2,"Sign In"),n.qZA(),n.TgZ(3,"button",10),n.NdJ("click",function(){return n.CHM(t),n.oxw().changeType("signup")}),n._uU(4," New user? "),n.qZA(),n.qZA()}}function Z(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div"),n.TgZ(1,"h3"),n._uU(2,"Reset Password"),n.qZA(),n.TgZ(3,"button",11),n.NdJ("click",function(){return n.CHM(t),n.oxw().changeType("login")}),n._uU(4," Back "),n.qZA(),n.qZA()}}function N(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," You must enter a valid email address "),n.qZA())}function b(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Please Enter Your First Name "),n.qZA())}function x(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",2),n._UZ(1,"input",12),n.YNc(2,b,2,0,"mat-error",0),n.qZA()),2&t){const t=n.oxw();n.Q6J("color",(null==t.firstName?null:t.firstName.valid)&&"accent"),n.xp6(2),n.Q6J("ngIf",(null==t.firstName?null:t.firstName.invalid)&&(null==t.firstName?null:t.firstName.dirty))}}function y(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Please Enter Your Last Name "),n.qZA())}function J(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",2),n._UZ(1,"input",13),n.YNc(2,y,2,0,"mat-error",0),n.qZA()),2&t){const t=n.oxw();n.Q6J("color",(null==t.email?null:t.email.valid)&&"accent"),n.xp6(2),n.Q6J("ngIf",(null==t.lastName?null:t.lastName.invalid)&&(null==t.lastName?null:t.lastName.dirty))}}function I(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Password must be at least 6 characters long "),n.qZA())}function C(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",2),n._UZ(1,"input",14),n.YNc(2,I,2,0,"mat-error",0),n.qZA()),2&t){const t=n.oxw();n.Q6J("color",(null==t.password?null:t.password.valid)&&"accent"),n.xp6(2),n.Q6J("ngIf",(null==t.password?null:t.password.invalid)&&(null==t.password?null:t.password.dirty))}}function _(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Password does not match "),n.qZA())}function q(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",2),n._UZ(1,"input",15),n.YNc(2,_,2,0,"mat-error",0),n.qZA()),2&t){const t=n.oxw();n.Q6J("color",t.passwordDoesMatch?"accent":"warn"),n.xp6(2),n.Q6J("ngIf",(null==t.passwordConfirm?null:t.passwordConfirm.dirty)&&!t.passwordDoesMatch)}}function T(t,e){if(1&t&&(n.TgZ(0,"button",16),n._uU(1," Send Reset Email "),n.qZA()),2&t){const t=n.oxw();n.Q6J("disabled",t.loading)}}function A(t,e){if(1&t&&(n.TgZ(0,"button",17),n._uU(1," Login "),n.qZA()),2&t){const t=n.oxw();n.Q6J("disabled",t.form.invalid||!t.passwordDoesMatch||t.loading)}}function k(t,e){if(1&t&&(n.TgZ(0,"button",17),n._uU(1," Login "),n.qZA()),2&t){const t=n.oxw();n.Q6J("disabled",t.loading)}}function M(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",18),n.NdJ("click",function(){return n.CHM(t),n.oxw().changeType("reset")}),n._uU(1," Forgot password? "),n.qZA()}}const U=[{path:"",component:(()=>{class t{constructor(t,e,r,n){this.fb=t,this.router=e,this.auth=r,this.restDataSoruce=n,this.type="login",this.loading=!1}ngOnInit(){this.user=new c.n,this.form=this.fb.group({firstName:["",[l.kI.required]],lastName:["",[l.kI.required]],email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.minLength(6),l.kI.required]],passwordConfirm:["",[]]})}changeType(t){this.type=t,this.serverMessage=""}get isLogin(){return"login"===this.type}get isSignup(){return"signup"===this.type}get isPasswordReset(){return"reset"===this.type}get email(){return this.form.get("email")}get firstName(){return this.form.get("firstName")}get lastName(){return this.form.get("lastName")}get password(){return this.form.get("password")}get passwordConfirm(){return this.form.get("passwordConfirm")}get passwordDoesMatch(){var t,e;return"signup"!==this.type||(null===(t=this.password)||void 0===t?void 0:t.value)===(null===(e=this.passwordConfirm)||void 0===e?void 0:e.value)}register(t){t.valid&&(this.user.email=this.form.value.email,this.user.firstName=this.form.value.firstName,this.user.lastName=this.form.value.lastName,this.user.password=this.form.value.password,this.auth.register(this.user).subscribe(t=>{t.success?(this.restDataSoruce.storeUserData(t.token,t.user),this.router.navigateByUrl("dashboard")):this.serverMessage=t}))}authenticate(t){this.user.email=this.form.value.email,this.user.password=this.form.value.password,this.auth.authenticate(this.user).subscribe(t=>{t.success?(this.restDataSoruce.storeUserData(t.token,t.user),this.router.navigateByUrl("dashboard")):this.serverMessage=t})}onSubmit(){var t,e=this;return(t=function*(){e.loading=!0;try{e.isLogin&&e.authenticate(e.form),e.isSignup&&e.register(e.form),e.isPasswordReset&&(e.serverMessage="Check your email")}catch(t){e.serverMessage=t}e.loading=!1},function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function s(t){u(i,n,o,s,a,"next",t)}function a(t){u(i,n,o,s,a,"throw",t)}s(void 0)})})()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.qu),n.Y36(o.F0),n.Y36(i.e),n.Y36(m.U))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-email-password-auth"]],decls:18,vars:15,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[3,"color"],["matInput","","formControlName","email","type","email","placeholder","Email","autocomplete","off"],[3,"color",4,"ngIf"],[1,"server-error"],["mat-stroked-button","","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","accent","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"],["color","primary","size","small","mat-raised-button","",3,"click"],["color","warn","size","small","mat-raised-button","",3,"click"],["matInput","","formControlName","firstName","type","text","placeholder","First Name","autocomplete","off"],["matInput","","formControlName","lastName","type","text","placeholder","Last Name","autocomplete","off"],["matInput","","formControlName","password","type","password","placeholder","Password","autocomplete","off"],["matInput","","formControlName","passwordConfirm","type","password","placeholder","Confirm password","autocomplete","off"],["mat-stroked-button","","type","submit",3,"disabled"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"mat-card"),n.YNc(1,w,5,0,"div",0),n.YNc(2,v,5,0,"div",0),n.YNc(3,Z,5,0,"div",0),n.TgZ(4,"form",1),n.NdJ("ngSubmit",function(){return e.onSubmit()}),n.TgZ(5,"mat-form-field",2),n._UZ(6,"input",3),n.YNc(7,N,2,0,"mat-error",0),n.qZA(),n.YNc(8,x,3,2,"mat-form-field",4),n.YNc(9,J,3,2,"mat-form-field",4),n.YNc(10,C,3,2,"mat-form-field",4),n.YNc(11,q,3,2,"mat-form-field",4),n.TgZ(12,"mat-error",5),n._uU(13),n.qZA(),n.YNc(14,T,2,1,"button",6),n.YNc(15,A,2,1,"button",7),n.YNc(16,k,2,1,"button",7),n.qZA(),n.YNc(17,M,2,0,"button",8),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",e.isSignup),n.xp6(1),n.Q6J("ngIf",e.isLogin),n.xp6(1),n.Q6J("ngIf",e.isPasswordReset),n.xp6(1),n.Q6J("formGroup",e.form),n.xp6(1),n.Q6J("color",(null==e.email?null:e.email.valid)&&"accent"),n.xp6(2),n.Q6J("ngIf",(null==e.email?null:e.email.invalid)&&(null==e.email?null:e.email.dirty)),n.xp6(1),n.Q6J("ngIf",e.isSignup),n.xp6(1),n.Q6J("ngIf",e.isSignup),n.xp6(1),n.Q6J("ngIf",!e.isPasswordReset),n.xp6(1),n.Q6J("ngIf",e.isSignup),n.xp6(2),n.Oqu(e.serverMessage),n.xp6(1),n.Q6J("ngIf",e.isPasswordReset),n.xp6(1),n.Q6J("ngIf",e.isSignup),n.xp6(1),n.Q6J("ngIf",e.isLogin),n.xp6(1),n.Q6J("ngIf",e.isLogin&&!e.isPasswordReset))},directives:[d.a8,f.O5,l._Y,l.JL,l.sg,p.KE,g.Nt,l.Fj,l.JJ,l.u,p.TO,h.lW],styles:["mat-card[_ngcontent-%COMP%]{max-width:500px;width:90%;margin:50px auto}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.server-error[_ngcontent-%COMP%]{margin:8px 0}input[_ngcontent-%COMP%]{height:2em}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{padding:.3em 0}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%]{vertical-align:top}div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.15em}button[_ngcontent-%COMP%]{margin-bottom:10px;width:150px}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.Bz.forChild(U)],o.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[s],imports:[[a.m,P]]}),t})()}}]);