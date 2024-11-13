import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <div className="flex items-center">
      <div className="mr-3 sm:mr-4 w-12 sm:w-16 sm-w-16">
        <ContentfulImage
          alt={name}
          className="object-cover h-full rounded-full"
          height={56}
          width={56}
          src={picture.url}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
