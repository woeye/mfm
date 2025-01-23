import { getPayload } from "payload";
import configPromise from '@payload-config';


export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise });

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   categories: true,
    //   meta: true,
    // },
  });

  console.log(posts);


  return (
    <div>
      {posts.docs.map(doc => {
        console.log(JSON.stringify(doc.content));
        return (
          <div key={doc.id}>{doc.title}</div>
        );
      })}
    </div>
  );
};
