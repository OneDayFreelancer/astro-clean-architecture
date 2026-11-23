import React, {useEffect} from "react";
import {useStore} from "@nanostores/react";
import {userContainer} from "@features/posts";
import {$postId} from "@features/posts/presentation/stores/posts.ts";

interface Props {
    postId: number
}

export const FormUpdatePostIsland = ({postId}: Props) => {
    useEffect(() => { $postId.set(postId); }, [postId]);

    const { mutate, loading: updateLoading, error: updateError } = useStore(userContainer.updatePost);
    const { data: post, loading: getLoading, error: getError} = useStore(userContainer.getPostById);
    if(getLoading) return <p>Loading...</p>
    if(getError) return <p>Error loading data</p>

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        await mutate({
            id: Number(formData.get("input-post-id")),
            title: String(formData.get("input-title")),
            body: String(formData.get("input-body"))
        });
        form.reset();
    }

    return (
        <form onSubmit={onSubmit}>
            <input hidden name="input-post-id" defaultValue={post?.id}/>
            <label className="large-label" htmlFor="input-title" >
                Post Title
                <input type="text" name="input-title" required defaultValue={post?.title} />
            </label>
            <label className="large-label" htmlFor="input-body">
                Post Body
                <textarea name="input-body" required  defaultValue={post?.body}/>
            </label>
            <button type="submit">
                {updateLoading?"Sending...": "Submit"}
            </button>
            {updateError && <p>Error create post</p>}
        </form>
    )
}