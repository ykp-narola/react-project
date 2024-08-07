import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client;
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);                 
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create({ID: ID.unique(), email, password, name});
            if(userAccount) return this.login({email, password})
            return userAccount;
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            console.log('this.account :>> ', this.account.get());
            return await this.account.get()
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService(); 

export default authService;