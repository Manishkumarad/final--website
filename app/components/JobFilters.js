"use client"
import React from 'react'

export default function JobFilters({ filters, setFilters, countries, states }){
  return (
    <aside className="filters-aside">
      <div className="filters-box">
        <h4 className="filters-title">Filters</h4>

        <div className="filters-field">
          <label>Search</label>
          <input className="filters-search" placeholder="Search title or description" value={filters.query} onChange={e=>setFilters(f=>({...f, query: e.target.value}))} />
        </div>

        <div className="filters-field">
          <label>Category</label>
          <select value={filters.category} onChange={e=>setFilters(f=>({...f, category: e.target.value}))}>
            <option>Any</option>
            <option>IT</option>
            <option>Non-IT</option>
          </select>
        </div>

        <div className="filters-field">
          <label>Country</label>
          <select value={filters.country} onChange={e=>setFilters(f=>({...f, country: e.target.value, state: 'Any' }))}>
            <option>Any</option>
            {countries.map(c=> <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="filters-field">
          <label>State / City</label>
          {Array.isArray(states) && states.length > 0 ? (
            <select value={filters.state} onChange={e=>setFilters(f=>({...f, state: e.target.value}))}>
              <option>Any</option>
              {states.map(s=> <option key={s}>{s}</option>)}
            </select>
          ) : (
            <input placeholder="Any — enter a city or state" value={filters.state === 'Any' ? '' : filters.state} onChange={e=>setFilters(f=>({...f, state: e.target.value || 'Any'}))} />
          )}
        </div>

        <div className="filters-field">
          <label>Min experience (years)</label>
          <input type="number" value={filters.minExp} onChange={e=>setFilters(f=>({...f, minExp: Number(e.target.value)}))} min={0} />
        </div>

        <div className="filters-field">
          <label>Level</label>
          <select value={filters.level} onChange={e=>setFilters(f=>({...f, level: e.target.value}))}>
            <option>Any</option>
            <option>Fresher</option>
            <option>Entry</option>
            <option>Mid</option>
            <option>Senior</option>
          </select>
        </div>

        <div className="filters-actions">
          <button onClick={()=>setFilters({ category: 'Any', country: 'Any', state: 'Any', minExp: 0, level: 'Any', query: '' })} className="btn-ghost">Reset</button>
        </div>
      </div>
    </aside>
  )
}
