import React from "react";
import { Link, useLocation } from "react-router";
import Comment from "../components/pages/strategy-feed-page-detail/Comment";
import Detail from "../components/pages/strategy-feed-page-detail/Detail";
import { useQuery } from "@tanstack/react-query";
import { getScriptDetail } from "../services/script";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Skeleton } from "../components/ui/skeleton";

export default function StrategyFeedPageDetail() {
  const location = useLocation();
  const id = location.pathname.slice(15);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["script"],
    queryFn: () => getScriptDetail(id),
  });

  if (isError && error instanceof AxiosError) toast.error(error.message);
  return (
    <div>
      <div className="lg:ml-[38px] flex items-center gap-4 mb-6 text-sm font-medium">
        <Link
          to={"/strategy-feed"}
          className="hover:text-secondary transition-all"
        >
          Strategy Feed
        </Link>
        <span className="hover:text-secondary transition-all cursor-pointer">
          /
        </span>
        <Link to={"/strategy-feed/1"} className="text-secondary">
          {data?.title}
        </Link>
      </div>
      {isLoading ? (
        <Skeleton className={"h-full w-full"} />
      ) : (
        <>
          <Detail data={data} />
          <Comment data={data} />
        </>
      )}
    </div>
  );
}
