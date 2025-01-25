import s from './SearchBox.module.css';
import Container from '../Container/Container.jsx';

export default function SearchBox({ onFilter, value }) {
  return (
    <section className={s.searchBox_section}>
      <Container className={s.searchBox_container}>
        <label className={s.searchBox_label}>
          <span>Find contacts by name</span>
          <input
            className={s.searchBox_input}
            type="text"
            name="search"
            onChange={onFilter}
            value={value}
          />
        </label>
      </Container>
    </section>
  );
}
