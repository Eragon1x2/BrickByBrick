import Material from '../components/Material';
import materials from '../db/materials';

export default function ShopPage() {
    return (
        <div>
 <div className='materials-block'>
      {materials && materials.map((material) => {
        return <Material key={material.name} name={material.name} quantity={material.quantity} price={material.price} icon={material.icon}/>
      })}
      </div>

        </div>
    )
}