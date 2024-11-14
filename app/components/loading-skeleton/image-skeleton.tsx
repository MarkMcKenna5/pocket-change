interface ImageSkeletonProps {
    width: string
}

export default function ImageSkeleton({width}: ImageSkeletonProps) {
    return (
        <div style={{width}} className={`bg-[#E2E2E2] animate-pulse h-[150px] sm:h-[333px] md:h-[400px] lg:[550px]`}>

        </div>
    )
}