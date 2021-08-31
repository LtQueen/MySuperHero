import HeroListItem from './HeroListItem';

const HeroList = ({props}) => {
    return (
        <ul>
            {props.map((item, i) => <HeroListItem key={i} props={item} />)}
        </ul>
    );
}

export default HeroList;