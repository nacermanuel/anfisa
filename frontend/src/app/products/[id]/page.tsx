const ProductDetail = ({ params }: any) => {
  return (
    <div>
      <p className="text-center font-bold text-4xl my-8">
        Procut detail number {params.id}
      </p>
    </div>
  );
};

export default ProductDetail;
