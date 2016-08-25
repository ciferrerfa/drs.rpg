import { Language } from './language.model';
import { Role }     from './role.model'; 

export class Account {
	
	_id:		string;
	userId:		string;
	password:	string;
	mail:		string;
	language:	Language;
	roles:		Role[];
	__v:		number;
	
}

/*

	userId: {type: String, trim: true, index: true, unique: true},
	password: {type: String},
	email: {type: String, trim: true},
	language: {type: mongoose.Schema.Types.ObjectId, ref: 'language'}, 
	roles: [{role: {type: mongoose.Schema.Types.ObjectId, ref: 'role'}}]
*/