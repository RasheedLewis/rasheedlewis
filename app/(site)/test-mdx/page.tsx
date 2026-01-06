import { getAllPosts } from '@/lib/mdx';

export default function TestMdxPage() {
    const workPosts = getAllPosts('work');
    const writingPosts = getAllPosts('writing');

    return (
        <div className="p-10 font-mono text-xs">
            <h1 className="text-xl font-bold mb-4">MDX Pipeline Verification</h1>

            <div className="mb-8">
                <h2 className="text-lg font-bold mb-2">Work Posts ({workPosts.length})</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-auto border">
                    {JSON.stringify(workPosts, null, 2)}
                </pre>
            </div>

            <div>
                <h2 className="text-lg font-bold mb-2">Writing Posts ({writingPosts.length})</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-auto border">
                    {JSON.stringify(writingPosts, null, 2)}
                </pre>
            </div>
        </div>
    );
}
