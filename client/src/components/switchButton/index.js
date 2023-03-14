import Aside from 'components/aside';

export default function SwitchButton({
  style,
  veiculosFiltrados,
  automoveis,
  filtrarVeiculos,
}) {
  return (
    <div className={style.filtro}>
      <label className={style.borda__filtro}>
        <h3 className={style.titulo__filtro}>
        Marca
        </h3>
        {automoveis.map((marca, index) => (
          <Aside
            key={marca + index}
            veiculosFiltrados={veiculosFiltrados}
            marca={marca}
            filtrarVeiculos={filtrarVeiculos}
            automoveis={automoveis}
          />
        ))}
      </label>
    </div>
  );
}
