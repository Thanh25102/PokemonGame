interface IResult {
  timer: number;
  onStartAgain: () => void;
}
const ResultScreen = (props: IResult) => {
  return (
    <div className="screen">
      <h2>Congratulations</h2>
      <p>{Math.round(props.timer / 1000)}s</p>
      <button onClick={props.onStartAgain}>Start Again</button>
    </div>
  );
};
export default ResultScreen;
