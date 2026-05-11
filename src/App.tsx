import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductsGia from '@/pages/ProductsGia'
import ProductsCashApplication from '@/pages/ProductsCashApplication'
import ProductsCollections from '@/pages/ProductsCollections'
import Industries from '@/pages/Industries'
import IndustryManufacturing from '@/pages/IndustryManufacturing'
import IndustryHealthcare from '@/pages/IndustryHealthcare'
import Customers from '@/pages/Customers'
import Partners from '@/pages/Partners'
import Company from '@/pages/Company'
import Resources from '@/pages/Resources'
import Contact from '@/pages/Contact'
import LegalPrivacy from '@/pages/LegalPrivacy'
import LegalTerms from '@/pages/LegalTerms'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/gia" element={<ProductsGia />} />
          <Route path="/products/cash-application" element={<ProductsCashApplication />} />
          <Route path="/products/collections" element={<ProductsCollections />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/manufacturing" element={<IndustryManufacturing />} />
          <Route path="/industries/healthcare" element={<IndustryHealthcare />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy" element={<LegalPrivacy />} />
          <Route path="/legal/terms" element={<LegalTerms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
