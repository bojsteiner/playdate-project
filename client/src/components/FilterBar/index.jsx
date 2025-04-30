import Form from 'react-bootstrap/Form';
import "./FilterBar.css"

const FilterBar = ({ filters, onChange, config }) => {
    return (
        <div className="filter-sidebar">
            <Form className="d-block gap-3 mb-4 filter-bar">
            {config.map((filter) => {
            if (filter.type === "checkbox") {
                return (
                <Form.Group key={filter.key} className='mb-3'>
                    <Form.Check
                    type="checkbox"
                    label={filter.label}
                    checked={filters[filter.key] || false}
                    onChange={(e) =>
                        onChange({ ...filters, [filter.key]: e.target.checked })
                    }
                    />
                </Form.Group>
                );
            }
    
            if (filter.type === "select") {
                return (
                <Form.Group key={filter.key} className='mb-3'>
                    <Form.Label>{filter.label}</Form.Label>
                    <Form.Select
                    value={filters[filter.key] || ""}
                    onChange={(e) =>
                        onChange({ ...filters, [filter.key]: e.target.value })
                    }
                    >
                    {filter.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
                );
            }
    
            return null; // for unsupported types
            })}
        </Form>
      </div>
    );
  };

  export default FilterBar