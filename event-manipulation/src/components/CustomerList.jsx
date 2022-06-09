import Button from './Button';

const renderSkills = (skill, index) => (
    <span key={`sk-${index}`}>{skill}</span>
)

const renderCustomers = (customer, index, onClick) => {
    return(
        <li key={`costumer-${customer.id}`}>
            {customer.name} <Button onClick={()=>onClick(customer.id)}>Deletar</Button>
            <div className='skills'>
                {customer.skills.map(renderSkills)}
            </div>
        </li>
    );
}

const List = (data, onClick) => (
    <ul>
        {data.map((customer, index) => renderCustomers(customer, index, onClick) )}
    </ul>
)

export default List;