// src/app/page.tsx
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">
          {/* YOUR TASK 1: Add your chosen Slogan/Tagline here */}
          
        </h1>
        <p className="mt-4 text-xl">
          {/* YOUR TASK 2: Add a brief, welcoming sentence. */}
           Welcome to OLARAHMA Integrated Farm, where we are committed to providing premium poultry products to the Nigerian market. 
          We specialize in the breeding, raising, and distribution of healthy and high-quality eggs and poultry meat, produced with the highest standards of care and sustainable farming practices. 
          Our mission is simple: to deliver fresh, nutritious, and locally sourced poultry products while maintaining ethical and environmentally friendly farming practices.
        
          Your trusted source for high-quality poultry in Nigeria.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome to Olarahmah's Integrated Farm
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">
          {/* YOUR TASK 3: Write 2-3 sentences about the farm. This is a snippet of your mission. */}
Mission
" To revolutionize the poultry industry in Nigeria by offering fresh, safe, and nutritious poultry products that enrich the lives of our customers and support the local economy."

Vision
Our vision is to become Nigeria’s leading provider of healthy, high-quality poultry products while ensuring sustainability, animal welfare, and community development.
We aim to set a benchmark for the industry by focusing on ethical farming and offering the best poultry products to Nigerian households, restaurants, and businesses.


         </p>
      </section>

      {/* Core Offerings Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Products Column */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">Our Products</h3>
              <p className="mt-2 text-gray-600">
                {/* YOUR TASK 4: Briefly describe the products you offer. */}
                At OLARAHMA Integrated Farm, we stand out from the competition by offering a range of high quality, locally produced products with a focus on freshness, taste, and nutritional value.
	Fresh, Farm-to-Table Eggs
	We produce farm-fresh eggs that are free from hormones and artificial additives, ensuring the highest quality for our customers. Our eggs are rich in nutrients, providing a healthy option for Nigerian families. 

-	Freshness Guaranteed: Our eggs are collected daily and delivered fresh to customers.
-	Nutrient-Rich: Our hens are fed a balanced diet, ensuring that our eggs are rich in essential vitamins and minerals.

	Free-Range Poultry Meat  
	We specialize in raising free-range chickens that are allowed to roam freely, providing them with a natural and healthy environment to thrive. This method results in poultry meat that is more tender, flavorful, and nutritious. Our chickens are carefully raised without the use of hormones or antibiotics.

-	Healthy and Tender Meat: Our free-range chickens are known for their rich flavor and superior quality.
-	Antibiotic-Free: We ensure our poultry are raised without harmful chemicals or antibiotics, giving you peace of mind.

	Value-Added Poultry Products
	We offer a variety of value-added poultry products, including slaughtering, chicken packaging, chicken wings, and chicken fillets. These products are ideal for families, restaurants, and hotels looking for convenient, high-quality meals.

-	Ready-to-Eat Options: Our slaughter chicken and other ready-to-eat products are perfect for busy individuals and food lovers who want delicious, healthy meals in no time.
-	Custom Cuts and Processing: We provide custom cuts and specialized poultry processing services, including packaging for commercial customers.

	Organic Poultry Feed  
	At OLARAHMA Integrated Farm, we use our own organic feed made from natural grains and vegetables to nourish our birds. This contributes to the overall health of the poultry and enhances the quality of our products.


              </p>
              {/* We'll make this a real button/link later */}
              <a href="/products" className="mt-4 inline-block bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800">
                See Our Products
              </a>
            </div>
            
            {/* Services Column */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">Farmer Services</h3>
              <p className="mt-2 text-gray-600">
                {/* YOUR TASK 5: Briefly describe the services you offer to other farmers. */}
-	Healthy Feed for Healthy Birds: We ensure that our poultry are raised on the best nutrition available, contributing to better health and higher-quality products.

	Educational Support for Poultry Farmers
	We offer consultancy services and training for aspiring and established poultry farmers, providing expert guidance on poultry farming best practices, feed management, and health protocols. Our goal is to help local farmers improve their productivity and sustainability in the poultry sector.

-	Training Programs: Comprehensive workshops on poultry care, biosecurity, and farm management.
-	Consultancy Services: Expert advice on improving farm operations and maximizing profits.


              </p>
              {/* We'll make this a real button/link later */}
              <a href="/services" className="mt-4 inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">
                Learn About Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We will add more sections like Testimonials, Blog posts, etc. later */}
    </div>
  );
}