(self.webpackChunkendeavours=self.webpackChunkendeavours||[]).push([[424],{6424:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AdminModule:()=>M});var o=n(7716),r=n(4655),i=n(4551);let s=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(t,e){return this.auth.authenticated?(console.log("authenticated"),!0):(console.log("cannot authenticate"),this.router.navigate(["/login"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.F0),o.LFG(i.e))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})();var a=n(9668);function u(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(o,r)}var l=n(3679),c=n(7453),m=n(5377),d=n(3738),f=n(8583),p=n(8295),g=n(9983),h=n(1095);function w(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h3"),o._uU(2,"Create Account"),o.qZA(),o.TgZ(3,"button",9),o.NdJ("click",function(){return o.CHM(t),o.oxw().changeType("login")}),o._uU(4," Returning user? "),o.qZA(),o.qZA()}}function v(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h3"),o._uU(2,"Sign In"),o.qZA(),o.TgZ(3,"button",10),o.NdJ("click",function(){return o.CHM(t),o.oxw().changeType("signup")}),o._uU(4," New user? "),o.qZA(),o.qZA()}}function Z(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h3"),o._uU(2,"Reset Password"),o.qZA(),o.TgZ(3,"button",11),o.NdJ("click",function(){return o.CHM(t),o.oxw().changeType("login")}),o._uU(4,"Back"),o.qZA(),o.qZA()}}function b(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," You must enter a valid email address "),o.qZA())}function x(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Please Enter Your First Name "),o.qZA())}function y(t,e){if(1&t&&(o.TgZ(0,"mat-form-field",2),o._UZ(1,"input",12),o.YNc(2,x,2,0,"mat-error",0),o.qZA()),2&t){const t=o.oxw();o.Q6J("color",(null==t.email?null:t.email.valid)&&"accent"),o.xp6(2),o.Q6J("ngIf",(null==t.email?null:t.email.invalid)&&(null==t.email?null:t.email.dirty))}}function N(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Please Enter Your First Name "),o.qZA())}function J(t,e){if(1&t&&(o.TgZ(0,"mat-form-field",2),o._UZ(1,"input",13),o.YNc(2,N,2,0,"mat-error",0),o.qZA()),2&t){const t=o.oxw();o.Q6J("color",(null==t.email?null:t.email.valid)&&"accent"),o.xp6(2),o.Q6J("ngIf",(null==t.email?null:t.email.invalid)&&(null==t.email?null:t.email.dirty))}}function I(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Password must be at least 6 characters long "),o.qZA())}function C(t,e){if(1&t&&(o.TgZ(0,"mat-form-field",2),o._UZ(1,"input",14),o.YNc(2,I,2,0,"mat-error",0),o.qZA()),2&t){const t=o.oxw();o.Q6J("color",(null==t.email?null:t.email.valid)&&"accent"),o.xp6(2),o.Q6J("ngIf",(null==t.password?null:t.password.invalid)&&(null==t.password?null:t.password.dirty))}}function q(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Password does not match "),o.qZA())}function T(t,e){if(1&t&&(o.TgZ(0,"mat-form-field",2),o._UZ(1,"input",15),o.YNc(2,q,2,0,"mat-error",0),o.qZA()),2&t){const t=o.oxw();o.Q6J("color",t.passwordDoesMatch?"accent":"warn"),o.xp6(2),o.Q6J("ngIf",(null==t.passwordConfirm?null:t.passwordConfirm.dirty)&&!t.passwordDoesMatch)}}function _(t,e){if(1&t&&(o.TgZ(0,"button",16),o._uU(1," Send Reset Email "),o.qZA()),2&t){const t=o.oxw();o.Q6J("disabled",t.loading)}}function A(t,e){if(1&t&&(o.TgZ(0,"button",17),o._uU(1," Submit "),o.qZA()),2&t){const t=o.oxw();o.Q6J("disabled",t.form.invalid||!t.passwordDoesMatch||t.loading)}}function k(t,e){if(1&t&&(o.TgZ(0,"button",17),o._uU(1," Submit "),o.qZA()),2&t){const t=o.oxw();o.Q6J("disabled",t.loading)}}function U(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",18),o.NdJ("click",function(){return o.CHM(t),o.oxw().changeType("reset")}),o._uU(1," Forgot password? "),o.qZA()}}const Q=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.fb=t,this.router=e,this.auth=n,this.restDataSoruce=o,this.type="login",this.loading=!1}ngOnInit(){this.user=new c.n,this.form=this.fb.group({firstName:["",[l.kI.required]],lastName:["",[l.kI.required]],email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.minLength(6),l.kI.required]],passwordConfirm:["",[]]})}changeType(t){this.type=t}get isLogin(){return"login"===this.type}get isSignup(){return"signup"===this.type}get isPasswordReset(){return"reset"===this.type}get email(){return this.form.get("email")}get password(){return this.form.get("password")}get passwordConfirm(){return this.form.get("passwordConfirm")}get passwordDoesMatch(){var t,e;return"signup"!==this.type||(null===(t=this.password)||void 0===t?void 0:t.value)===(null===(e=this.passwordConfirm)||void 0===e?void 0:e.value)}register(t){t.valid&&(this.user.email=this.form.value.email,this.user.firstName=this.form.value.firstName,this.user.lastName=this.form.value.lastName,this.user.password=this.form.value.password,this.auth.register(this.user).subscribe(t=>{t.success?(console.log({data:t,type:typeof t}),this.restDataSoruce.storeUserData(t.token,t.user),this.router.navigateByUrl("dashboard")):this.serverMessage=t}))}authenticate(t){console.log({fromComponent:this.user}),this.user.email=this.form.value.email,this.user.password=this.form.value.password,this.auth.authenticate(this.user).subscribe(t=>{console.log({data:t,type:typeof t}),t.success?(this.restDataSoruce.storeUserData(t.token,t.user),this.router.navigateByUrl("dashboard")):this.serverMessage=t})}onSubmit(){var t,e=this;return(t=function*(){e.loading=!0;try{e.isLogin&&e.authenticate(e.form),e.isSignup&&e.register(e.form),e.isPasswordReset&&(console.log("hello"),e.serverMessage="Check your email")}catch(t){e.serverMessage=t}e.loading=!1},function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function s(t){u(i,o,r,s,a,"next",t)}function a(t){u(i,o,r,s,a,"throw",t)}s(void 0)})})()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l.qu),o.Y36(r.F0),o.Y36(i.e),o.Y36(m.U))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-email-password-auth"]],decls:18,vars:15,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[3,"color"],["matInput","","formControlName","email","type","email","placeholder","Email","autocomplete","off"],[3,"color",4,"ngIf"],[1,"server-error"],["mat-stroked-button","","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","accent","type","submit",3,"disabled",4,"ngIf"],["mat-button","",3,"click",4,"ngIf"],["mat-stroked-button","",3,"click"],["size","small","mat-stroked-button","",3,"click"],["size","small","mat-button","",3,"click"],["matInput","","formControlName","firstName","type","text","placeholder","First Name","autocomplete","off"],["matInput","","formControlName","lastName","type","text","placeholder","Last Name","autocomplete","off"],["matInput","","formControlName","password","type","password","placeholder","Password","autocomplete","off"],["matInput","","formControlName","passwordConfirm","type","password","placeholder","Confirm password","autocomplete","off"],["mat-stroked-button","","type","submit",3,"disabled"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"mat-card"),o.YNc(1,w,5,0,"div",0),o.YNc(2,v,5,0,"div",0),o.YNc(3,Z,5,0,"div",0),o.TgZ(4,"form",1),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(5,"mat-form-field",2),o._UZ(6,"input",3),o.YNc(7,b,2,0,"mat-error",0),o.qZA(),o.YNc(8,y,3,2,"mat-form-field",4),o.YNc(9,J,3,2,"mat-form-field",4),o.YNc(10,C,3,2,"mat-form-field",4),o.YNc(11,T,3,2,"mat-form-field",4),o.TgZ(12,"mat-error",5),o._uU(13),o.qZA(),o.YNc(14,_,2,1,"button",6),o.YNc(15,A,2,1,"button",7),o.YNc(16,k,2,1,"button",7),o.qZA(),o.YNc(17,U,2,0,"button",8),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngIf",e.isSignup),o.xp6(1),o.Q6J("ngIf",e.isLogin),o.xp6(1),o.Q6J("ngIf",e.isPasswordReset),o.xp6(1),o.Q6J("formGroup",e.form),o.xp6(1),o.Q6J("color",(null==e.email?null:e.email.valid)&&"accent"),o.xp6(2),o.Q6J("ngIf",(null==e.email?null:e.email.invalid)&&(null==e.email?null:e.email.dirty)),o.xp6(1),o.Q6J("ngIf",e.isSignup),o.xp6(1),o.Q6J("ngIf",e.isSignup),o.xp6(1),o.Q6J("ngIf",!e.isPasswordReset),o.xp6(1),o.Q6J("ngIf",e.isSignup),o.xp6(2),o.Oqu(e.serverMessage),o.xp6(1),o.Q6J("ngIf",e.isPasswordReset),o.xp6(1),o.Q6J("ngIf",e.isSignup),o.xp6(1),o.Q6J("ngIf",e.isLogin),o.xp6(1),o.Q6J("ngIf",e.isLogin&&!e.isPasswordReset))},directives:[d.a8,f.O5,l._Y,l.JL,l.sg,p.KE,g.Nt,l.Fj,l.JJ,l.u,p.TO,h.lW],styles:["mat-card[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%;margin:0 auto}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.server-error[_ngcontent-%COMP%]{margin:8px 0}input[_ngcontent-%COMP%]{height:2em}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{padding:.3em 0}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%]{vertical-align:top}div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.15em}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(Q)],r.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[s],imports:[[a.m,Y]]}),t})()}}]);