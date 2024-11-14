interface TextSkeletonProps {
    width: string
}

export default function TextSkeleton({width}: TextSkeletonProps) {
    return (
        <div>
            <div style={{width}} className={`bg-[#E2E2E2] animate-pulse h-[25px] sm:h-[30px] mb-3 rounded-lg`}></div>
            <div style={{width}} className={`bg-[#E2E2E2] animate-pulse h-[25px] sm:h-[30px] mb-3 rounded-lg`}></div>
            <div style={{width}} className={`bg-[#E2E2E2] animate-pulse h-[25px] sm:h-[30px] mb-3 rounded-lg`}></div>
            <div style={{width}} className={`bg-[#E2E2E2] animate-pulse h-[25px] sm:h-[30px] mb-3 rounded-lg`}></div>
        </div>
    )
}