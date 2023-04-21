import { LineWave } from "react-loader-spinner"

export const Loader = ({isLoading}) => {
  return (
    <LineWave
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      visible={isLoading}
    />
  );
}