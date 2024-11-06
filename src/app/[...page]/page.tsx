import {PageProps} from "@/types/next";
import {
    Content,
    fetchOneEntry,
    isEditing,
    isPreviewing,
} from "@builder.io/sdk-react";
import {notFound} from "next/navigation";
import {CounterComponent} from "mgrab/components/Counter/Counter";

export default async function Page(props: PageProps) {
    const url = "/" + (props?.params?.page?.join("/") || "");

    const content = await fetchOneEntry({
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        options: props.searchParams,
        model: "page",
        userAttributes: {url},
    });

    console.log("API KEY:", process.env.NEXT_PUBLIC_BUILDER_API_KEY, "URL:", url, "Content:", content);

    const canShowContent =
        content ||
        isPreviewing(props.searchParams) ||
        isEditing(props.searchParams);

    if (!canShowContent) {
        notFound();
    }

    return (
        <>
            {/* Render the Builder page */}
            <Content
                apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
                content={content}
                model="page"
                customComponents={[CounterComponent]}
            />
        </>
    );
}
