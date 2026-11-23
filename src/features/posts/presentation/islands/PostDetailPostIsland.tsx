import {useStore} from "@nanostores/react";
import {userContainer} from "@features/posts";
import {$postId} from "@features/posts/presentation/stores/posts";
import {useEffect} from "react";

interface Props {
    postId: number
}

export const PostDetailPostIsland = ({postId}:Props) => {
    useEffect(() => { $postId.set(postId); }, [postId]);

    const {data: post, error, loading} = useStore(userContainer.getPostById)
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    )
}