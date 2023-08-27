const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
              <img src="/images/thumbs.jpg" alt="Thumbs"/>
              <div>
                Photo by <a href="https://www.freepik.com/author/valuavitaly">Valuavitaly</a> on <a href="https://www.freepik.com/">Freepik</a>
              </div>
            </div>
            <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

        </main>
    </Def>
  )
}


module.exports = home
