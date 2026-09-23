import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Main() {
  return (
    <main className="main-content">
      <h1 className="products-title">Nos Produits</h1>
      <div className='card-container'>
         <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/casque.jfif" />
      <Card.Body>
        <Card.Title>Wireless Headphones</Card.Title>
        <Card.Text>
          50.00DT </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/watch.jfif" />
      <Card.Body>
        <Card.Title>Smart Watch</Card.Title>
        <Card.Text>
        150.00DT
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/bag.jfif" />
      <Card.Body>
        <Card.Title>Backpack</Card.Title>
        <Card.Text>
          30.00DT
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '16rem' }}>
      <Card.Img variant="top" src="/sneakers.jfif" />
      <Card.Body>
        <Card.Title>Sneakers</Card.Title>
        <Card.Text>
          80.00 DT
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="shop-info">
        <h2>Merci pour votre visite</h2>
        <p>
          Vous pouvez nous contacter pour toute question concernant nos produits.
          Profitez de la livraison gratuite et dun service simple et rapide.
        </p>
      </div>
    </main>
  )
}

export default Main
