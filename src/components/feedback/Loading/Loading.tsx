import { TLoading } from "@myTypes/shared";
interface LoadingProps {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

const Loading = ({ children, status, error }: LoadingProps) => {
  if (status === "pending") {
    return <p>loading please wait...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
