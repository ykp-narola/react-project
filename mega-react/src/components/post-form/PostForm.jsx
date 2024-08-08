import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Button} from '../index'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Service from '../../appwrite/config'

function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues}  = useForm({
        defaultValues:{
            title: post?.title || '',
            slug: post?.slug || '',
            status: post?.status || 'active',
            content: post?.content || '',
        }
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.userData)

    const submit = async (data) => {
        if(post){
            let file = data.image[0] ? Service.fileUpload(data.image[0]) : null
            if(file){
                Service.deleteFile(post.featuredImage)
            }
            const dbPost = Service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else{
            let file = data.image[0] ? Service.fileUpload(data.image[0]) : null
            if(file){
                const fileId =  file.$id
                data.featuredImage = fileId
                const dbPost =await Service.createPost({...data, userId: userData.$id})
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransfrom = useCallback((value)=>{
        if(typeof value == 'string'){
            console.log('value :>> ', value);
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g, "-")
        }
        return "";
    })

    useEffect(()=>{
        const subscription = watch((value, {name})=> {
            if(name == 'title'){
                setValue('slug', slugTransfrom(value.title, {shouldValidate: true}))
            }
        })
        return () => {
            subscription.unsubscription()
        }
    }, [watch, slugTransfrom, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransfrom(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm
