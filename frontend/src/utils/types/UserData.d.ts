export type UserData = {
	name: string;
	phoneNumber: string;
	surname: string;
	firstName?: string;
	lastName?: string;
	email: string;
	role?: string;
	accessToken?: {
		token: string;
	};
	refreshToken?: {
		token: symboltring;
	};
	messages?: any;
};
