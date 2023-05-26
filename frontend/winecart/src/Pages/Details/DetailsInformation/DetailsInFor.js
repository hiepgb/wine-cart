import classNames from 'classnames/bind';
import styles from './DetailsInFor.module.scss';
import DataInFor from './DataInFor';
const cx = classNames.bind(styles);

function DetailsInFormation() {
  return (
    <div className={cx('tab-content')}>
      <h4>Information</h4>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Values</th>
          </tr>
        </thead>
        {DataInFor.map((data, index) => (
          <tbody key={index}>
            <tr>
              <td>Color</td>
              <td>{data.color}</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>{data.Material}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default DetailsInFormation;
