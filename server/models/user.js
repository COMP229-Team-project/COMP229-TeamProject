"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
    },
    username: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
    },
}, {
    collection: "users",
    timestamps: true,
});
UserSchema.plugin(passport_local_mongoose_1.default);
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map