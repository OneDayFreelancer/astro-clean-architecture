import {useStore} from "@nanostores/react";
import {userContainer} from "@features/posts/container.client";
import {PostCard} from "@features/posts/presentation/components/PostCard.tsx";

export const PostListIsland= () => {
    const {data: posts, loading, error} = useStore(userContainer.getAllPost);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error loading data</p>

    return <ul>
        {
            posts?.map((post)=> <li key={post.id}><PostCard {...post}/></li>)
        }
    </ul>;
}