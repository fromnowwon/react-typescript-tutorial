import { IState as IProps } from '../App';

// interface IProps {
// 	people: {
// 		name: string;
// 		age: number;
// 		url: string;
// 		note?: string;
// 	}[];
// }

// props에 직접 타입을 지정하는 방식
// typescript는 JSX.Element 반환하는 함수로 인식
// const List = ({ people }: IProps) => {
// 	return <div>List</div>;
// };

// 컴포넌트 명시
// typescript는 함수형 컴포넌트를 반환하는 함수로 인식
const List: React.FC<IProps> = ({ people }) => {

	// JSX 엘리먼트 배열 반환 명시
	const renderList = (): JSX.Element[] => {
		return people.map((person, idx) => (
			<li className="list" key={idx}>
				<div className="list-header">
					<img src={person.url} alt="" />
					<h2>{person.name}</h2>
				</div>
				<p>{person.age} years old</p>
				<p className="list-note">{person.note}</p>
			</li>
		))
	}

	return (
		<ul>
			{renderList()}
		</ul>
	)
};

export default List;
