class Api::BenchesController < ApplicationController

  def index
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    render :show
  end

  private
  def bench_params
    params.require(:bench).permit(:lng, :lat, :description)
  end

end