import HeroList from './HeroList';

const BioSection = props => (
    <section>
        <h3>{props.sectionName}</h3>
        {Array.isArray(props.value) ? <HeroList props={props.value} /> : props.value}
    </section>
)

export default BioSection;