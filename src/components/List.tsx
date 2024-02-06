interface IProps {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

// props에 직접 타입을 지정하는 방식
// typescript는 JSX.Element 반환하는 함수로 인식
// const List = ({ people }: IProps) => {
// 	return <div>List</div>;
// };

// 컴포넌트 명시
// typescript는 함수형 컴포넌트를 반환하는 함수로 인식
const List: React.FC<IProps> = ({ people }) => {
	return <div>List</div>;
};

export default List;
