interface PostPageProps {
    params: {
        id: string;
    };
}

export default function PostPage({ params }: PostPageProps) {
    const { id } = params;
    return <h1>Пост {id}</h1>;
}

