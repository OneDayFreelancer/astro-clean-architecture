import React from "react";
import {useStore} from "@nanostores/react";
import {container} from "@features/posts";

export const FormCreatePostIsland = () => {
    const { mutate, loading, error } = useStore(container.createPost)

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        await mutate({
            title: String(formData.get("input-title")),
            body: String(formData.get("input-body"))})
        form.reset();
    }

    return (
        <form onSubmit={onSubmit}>
            <label className="large-label" htmlFor="input-title">
                Post Title
                <input type="text" name="input-title" required />
            </label>
            <label className="large-label" htmlFor="input-body">
                Post Body
                <textarea name="input-body" required />
            </label>
            <button type="submit">
                {loading?"Sending...": "Submit"}
            </button>
            {error && <p>Error create post</p>}
        </form>
    )
}