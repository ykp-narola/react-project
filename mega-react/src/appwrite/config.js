import conf from "../conf/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client;
    account;
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);                 
        this.account = new Account(this.client)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage,status, userId} )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage,status} )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            if(await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug )) return true
            else return false
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug )
        } catch (error) {
            throw error;
        }
    }

    async listPost(query = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                query,
            )
        } catch (error) {
            throw error;
        }
    }

    // upload file service

    async fileUpload(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
        } catch (error) {
            throw error;
        }
    }

}

const service = new Service(); 

export default service;
