import { useIsFetching, useIsMutating } from "react-query";

import loadingIcon from "../../assets/loading.svg";

const LoaderOverlay = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (!isFetching && !isMutating) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70 ">
      <object
        type="image/svg+xml"
        data={loadingIcon}
        className="max-w-xs w-full"
      />
      <span className="text-2xl">Loading</span>
    </div>
  );
};

export default LoaderOverlay;
