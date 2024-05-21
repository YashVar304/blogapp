import { Client,ID,Databases,Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    Client = new Client();
    database;
    bucket;

    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.database=new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.database.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,featuredImage,status,userId
            })
        } catch (error) {
            console.log("Appwrite error :: createPost error ",error)
        }
    }
    async updatePost(slug ,{title,content,featuredImage,status,}){
        try {
            return this.database.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,featuredImage,status
            })
        } catch (error) {
            console.log("Appwrite error :: updatePost error ",error)
        }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false;
        }
    }
    async getPost (slug){
        try {
            return await this.database.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status",["active"])]){
        try {
            return await this.database.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            return false
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    }
}

const configService = new Service()

export default configService