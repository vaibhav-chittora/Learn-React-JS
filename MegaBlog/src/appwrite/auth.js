import conf from '../conf/conf';

import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(appwriteUrl)
            .setProject(appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method here;

            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }


}

const authService = new AuthService();

export default authService;