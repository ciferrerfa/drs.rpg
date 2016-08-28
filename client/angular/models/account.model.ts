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