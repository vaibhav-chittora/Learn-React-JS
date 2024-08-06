import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket; // it is storage only , but we call it bucket in this project.

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

    //create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
            )
        } catch (error) {
            console.log("Appwrite services :: createPost :: error", error);

        }


    }

    //update Post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status

                }

            )

        } catch (error) {
            console.log("Appwrite services :: updatePost :: error", error);
        }

    }

    //delete Post
    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug
            )

            return true

        } catch (error) {
            console.log("Appwrite services :: deletePost :: error", error);

            return false;
        }
    }

    //get a single Post
    async getPost({ slug }) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error) {
            console.log("Appwrite services :: getPost :: error", error);

            return false

        }
    }

    //get all posts
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite services :: getPosts :: error", error);

            return false

        }

    }

    //file upload services / methods :-

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )


        } catch (error) {
            console.log("Appwrite services :: uploadFile :: error", error);
            return false;
        }
    }


    //delete file
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId

            )
            return true;
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error", error);

        }
    }

    //preview File
    getFilePreview(fileId) {

        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }




}

const service = new Service()
export default service;


